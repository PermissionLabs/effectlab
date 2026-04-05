export const usage = {
  install: "bun add react-colorful",
  tsx: `"use client";

import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function ColorPickerExample() {
  const [color, setColor] = useState("#8b5cf6");

  return (
    <div className="flex flex-col items-center gap-4">
      <HexColorPicker color={color} onChange={setColor} />
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-lg border"
          style={{ backgroundColor: color }}
        />
        <span className="font-mono">{color}</span>
      </div>
    </div>
  );
}`,
};
