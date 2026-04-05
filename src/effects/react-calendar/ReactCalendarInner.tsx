"use client";

import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ReactCalendarInner() {
  const [value, setValue] = useState<Value>(new Date());

  const displayDate = value instanceof Date ? value : Array.isArray(value) && value[0] ? value[0] : null;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <p className="text-white/60 text-xs uppercase tracking-widest">
        Calendar Component
      </p>
      <div className="react-calendar-dark">
        <Calendar
          onChange={setValue}
          value={value}
        />
      </div>
      {displayDate && (
        <p className="text-white/40 text-xs">
          Selected:{" "}
          <span className="text-violet-400 font-medium">
            {displayDate.toLocaleDateString("en-US", {
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
