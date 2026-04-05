"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";

export default function ReactDatepickerInner() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [startTime, setStartTime] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-6">
      <p className="text-white/40 text-xs uppercase tracking-widest">
        Pick a date
      </p>

      <div className="flex flex-col gap-4 items-center">
        <div className="datepicker-dark">
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            dateFormat="yyyy/MM/dd"
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all w-56 text-center"
            calendarClassName="dark-calendar"
            showPopperArrow={false}
            inline
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <span className="text-white/30 text-[10px] uppercase tracking-wider">
              Selected
            </span>
            <span className="text-violet-400 text-sm font-mono">
              {startDate ? startDate.toLocaleDateString() : "None"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
