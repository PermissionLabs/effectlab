export const usage = {
  install: "bun add react-calendar",
  tsx: `"use client";

import { useState } from "react";
import Calendar from "react-calendar";
// Import CSS in your globals.css: @import "react-calendar/dist/Calendar.css";

type Value = Date | null | [Date | null, Date | null];

export default function CalendarExample() {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <div className="p-6">
      <Calendar onChange={setValue} value={value} />
      {value instanceof Date && (
        <p className="mt-4 text-sm">
          Selected: {value.toLocaleDateString()}
        </p>
      )}
    </div>
  );
}`,
};
