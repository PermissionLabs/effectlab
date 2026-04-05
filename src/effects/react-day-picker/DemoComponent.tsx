"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";

export default function ReactDayPickerDemo() {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <p className="text-white/60 text-xs uppercase tracking-widest">
        Date Picker
      </p>
      <div className="rdp-dark-wrapper">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "14px",
          }}
          styles={{
            month_caption: { color: "rgba(255,255,255,0.9)", fontWeight: 600 },
            weekday: { color: "rgba(255,255,255,0.4)", fontSize: "12px" },
            day_button: {
              borderRadius: "8px",
              transition: "all 0.15s ease",
            },
            today: {
              fontWeight: 700,
              color: "#8b5cf6",
            },
            selected: {
              background: "rgba(139,92,246,0.3)",
              borderRadius: "8px",
              color: "#c4b5fd",
            },
            chevron: {
              fill: "rgba(255,255,255,0.5)",
            },
          }}
        />
      </div>
      {selected && (
        <p className="text-white/40 text-xs">
          Selected:{" "}
          <span className="text-violet-400 font-medium">
            {selected.toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </p>
      )}
    </div>
  );
}
