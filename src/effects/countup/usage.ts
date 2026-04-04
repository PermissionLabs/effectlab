export const usage = {
  install: "bun add react-countup",
  tsx: `"use client";

import CountUp from "react-countup";

const stats = [
  { end: 12847, label: "Users", prefix: "", suffix: "", decimals: 0 },
  { end: 99.9, label: "Uptime %", prefix: "", suffix: "%", decimals: 1 },
  { end: 2450000, label: "Revenue", prefix: "$", suffix: "", decimals: 0 },
];

export default function AnimatedCounter() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-2 p-6">
          <span className="text-4xl font-bold tabular-nums">
            <CountUp
              end={stat.end}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
              duration={2.5}
              separator=","
              enableScrollSpy
              scrollSpyOnce
            />
          </span>
          <span className="text-sm text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}`,
};
