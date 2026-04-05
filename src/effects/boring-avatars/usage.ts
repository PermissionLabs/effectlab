export const usage = {
  install: "bun add boring-avatars",
  tsx: `"use client";

import { useState } from "react";
import Avatar from "boring-avatars";

const variants = ["marble", "beam", "pixel", "sunset", "ring", "bauhaus"] as const;
const colors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];

export default function BoringAvatarsExample() {
  const [name, setName] = useState("Jane Doe");

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <div className="flex gap-4">
        {variants.map((variant) => (
          <div key={variant} className="flex flex-col items-center gap-1">
            <Avatar size={48} name={name} variant={variant} colors={colors} />
            <span className="text-xs text-gray-400">{variant}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name..."
        className="px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700"
      />
    </div>
  );
}`,
};
