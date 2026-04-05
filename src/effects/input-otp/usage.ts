export const usage = {
  install: "bun add input-otp",
  tsx: `"use client";

import { useState } from "react";
import { OTPInput, type SlotProps } from "input-otp";

function Slot(props: SlotProps) {
  return (
    <div
      className={\`w-12 h-14 flex items-center justify-center rounded-lg border text-xl font-mono \${
        props.isActive
          ? "border-violet-500 bg-violet-500/10"
          : "border-gray-700 bg-gray-900"
      }\`}
    >
      {props.char ?? (props.hasFakeCaret && <div className="w-px h-6 bg-violet-400 animate-pulse" />)}
    </div>
  );
}

export default function OTPExample() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <p className="text-sm text-gray-400">Enter your 6-digit code</p>
      <OTPInput
        maxLength={6}
        value={value}
        onChange={setValue}
        render={({ slots }) => (
          <div className="flex gap-2">
            {slots.map((slot, idx) => (
              <Slot key={idx} {...slot} />
            ))}
          </div>
        )}
      />
      {value.length === 6 && (
        <p className="text-emerald-400 text-sm">Code: {value}</p>
      )}
    </div>
  );
}`,
};
