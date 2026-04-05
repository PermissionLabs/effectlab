"use client";

import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function ReactColorfulDemo() {
  const [color, setColor] = useState("#8b5cf6");

  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-8">
      <div className="flex flex-col items-center gap-6">
        <HexColorPicker color={color} onChange={setColor} />

        <div className="flex items-center gap-4">
          {/* Preview swatch */}
          <div
            className="w-12 h-12 rounded-xl border border-white/10 shadow-lg"
            style={{ backgroundColor: color }}
          />

          {/* Hex value display */}
          <div className="flex flex-col">
            <span className="text-white/40 text-xs uppercase tracking-wider">
              Hex Value
            </span>
            <span className="text-white font-mono text-lg">
              {color.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
