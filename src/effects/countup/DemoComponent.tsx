"use client";

import CountUp from "react-countup";

const stats = [
  { end: 18759, label: "Total Revenue", prefix: "$", suffix: "", decimals: 0 },
  { end: 12847, label: "Users", prefix: "", suffix: "", decimals: 0 },
  { end: 99.9, label: "Uptime", prefix: "", suffix: "%", decimals: 1 },
];

export default function CountUpDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] p-6 gap-4">
      {/* Big hero number */}
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-widest text-white/30 mb-2">Total Revenue</p>
        <span className="text-5xl font-bold text-white tabular-nums">
          <CountUp end={18759} prefix="$" duration={2.5} separator="," enableScrollSpy scrollSpyOnce />
        </span>
        <p className="text-[12px] text-emerald-400/70 mt-2">+12.5% from last month</p>
      </div>

      {/* Smaller stats stacked */}
      <div className="flex flex-col gap-2 w-full max-w-[200px]">
        {[
          { end: 12847, label: "Users", prefix: "" },
          { end: 99.9, label: "Uptime", prefix: "", suffix: "%", decimals: 1 },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-4 py-3"
          >
            <span className="text-[12px] text-white/40">{stat.label}</span>
            <span className="text-lg font-bold text-white tabular-nums">
              <CountUp
                end={stat.end}
                prefix={stat.prefix || ""}
                suffix={stat.suffix || ""}
                decimals={stat.decimals || 0}
                duration={2}
                separator=","
                enableScrollSpy
                scrollSpyOnce
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
