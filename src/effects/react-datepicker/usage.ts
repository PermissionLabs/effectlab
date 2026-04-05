export const usage = {
  install: "bun add react-datepicker",
  css: `/* Add to your globals.css */
@import "react-datepicker/dist/react-datepicker.css";`,
  tsx: `"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";

export default function DatepickerExample() {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <DatePicker
        selected={date}
        onChange={(d) => setDate(d)}
        dateFormat="yyyy/MM/dd"
        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
        inline
      />
      <p className="text-white/60 text-sm">
        Selected: {date?.toLocaleDateString()}
      </p>
    </div>
  );
}`,
};
