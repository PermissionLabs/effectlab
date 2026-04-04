"use client";

import CountUp from "react-countup";

const stats = [
  { end: 12847, label: "Users", prefix: "", suffix: "", decimals: 0 },
  { end: 99.9, label: "Uptime %", prefix: "", suffix: "%", decimals: 1 },
  { end: 2450000, label: "Revenue", prefix: "$", suffix: "", decimals: 0 },
];

export default function CountUpDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 p-6"
          >
            <span className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
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
            <span className="text-sm text-white/60">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
