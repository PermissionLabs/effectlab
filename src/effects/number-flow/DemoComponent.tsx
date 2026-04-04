"use client";

import { useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";

export default function NumberFlowDemo() {
  const [value, setValue] = useState(12345);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => prev + Math.floor(Math.random() * 200 + 50));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm uppercase tracking-widest text-white/50">
          Total Revenue
        </span>
        <div className="text-6xl font-bold text-white tabular-nums">
          <span className="text-white/50">$</span>
          <NumberFlow
            value={value}
            format={{ useGrouping: true }}
            transformTiming={{ duration: 750, easing: "ease-out" }}
          />
        </div>
        <span className="text-sm text-emerald-400">+12.5% from last month</span>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setValue((v) => v + 1000)}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
        >
          +$1,000
        </button>
        <button
          onClick={() => setValue(0)}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
