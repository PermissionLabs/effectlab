"use client";

import { ActivityCalendar } from "react-activity-calendar";

function generateSampleData() {
  const data = [];
  const now = new Date();
  const start = new Date(now);
  start.setFullYear(start.getFullYear() - 1);

  for (let d = new Date(start); d <= now; d.setDate(d.getDate() + 1)) {
    const rand = Math.random();
    let level: 0 | 1 | 2 | 3 | 4;
    if (rand < 0.3) level = 0;
    else if (rand < 0.5) level = 1;
    else if (rand < 0.7) level = 2;
    else if (rand < 0.85) level = 3;
    else level = 4;

    data.push({
      date: d.toISOString().split("T")[0],
      count: level * 3,
      level,
    });
  }
  return data;
}

const sampleData = generateSampleData();

const purpleTheme = {
  dark: ["#161032", "#3b1d71", "#6b21a8", "#9333ea", "#c084fc"],
};

export default function ReactActivityCalendarDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4 overflow-x-auto">
      <p className="text-white/50 text-xs uppercase tracking-widest">
        Contribution Activity
      </p>
      <div className="w-full max-w-2xl">
        <ActivityCalendar
          data={sampleData}
          theme={purpleTheme}
          colorScheme="dark"
          blockSize={12}
          blockMargin={3}
          fontSize={12}
          labels={{
            totalCount: "{{count}} contributions in the last year",
          }}
        />
      </div>
    </div>
  );
}
