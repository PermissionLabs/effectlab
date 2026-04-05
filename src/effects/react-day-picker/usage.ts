export const usage = {
  install: "bun add react-day-picker",
  tsx: `"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";

export default function DayPickerExample() {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  return (
    <div className="p-6">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />
      {selected && (
        <p className="mt-4 text-sm">
          Selected: {selected.toLocaleDateString()}
        </p>
      )}
    </div>
  );
}`,
};
