"use client";

import { useState } from "react";
import { OTPInput, type SlotProps } from "input-otp";

function Slot(props: SlotProps) {
  return (
    <div
      className={`relative w-12 h-14 text-xl flex items-center justify-center rounded-xl border transition-all duration-200 font-mono ${
        props.isActive
          ? "border-violet-500 bg-violet-500/10 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
          : "border-white/10 bg-white/5"
      }`}
    >
      {props.char !== null && (
        <span className="text-white">{props.char}</span>
      )}
      {props.hasFakeCaret && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
          <div className="w-px h-6 bg-violet-400" />
        </div>
      )}
    </div>
  );
}

export default function InputOtpDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-8 gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-white/80 text-sm font-medium">
          Enter verification code
        </span>
        <span className="text-white/40 text-xs">
          A 6-digit code was sent to your device
        </span>
      </div>

      <OTPInput
        maxLength={6}
        value={value}
        onChange={setValue}
        containerClassName="flex gap-2"
        render={({ slots }) => (
          <div className="flex gap-2">
            {slots.slice(0, 3).map((slot, idx) => (
              <Slot key={idx} {...slot} />
            ))}
            <div className="flex items-center px-1">
              <div className="w-3 h-px bg-white/20" />
            </div>
            {slots.slice(3).map((slot, idx) => (
              <Slot key={idx + 3} {...slot} />
            ))}
          </div>
        )}
      />

      <div className="flex flex-col items-center gap-1">
        {value.length === 6 ? (
          <span className="text-emerald-400 text-xs font-medium">
            Code entered: {value}
          </span>
        ) : (
          <span className="text-white/30 text-xs">
            {6 - value.length} digits remaining
          </span>
        )}
      </div>
    </div>
  );
}
