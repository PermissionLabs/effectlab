"use client";

import { useState, useEffect } from "react";
import { Line, Circle } from "rc-progress";

export default function RcProgressDemo() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const target = 85;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setPercent(Math.round(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-6">
      <p className="text-white/50 text-xs uppercase tracking-widest">
        Auto-animating progress
      </p>

      <div className="flex items-center gap-8 w-full max-w-md">
        {/* Line progress */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-white/40 text-xs">Linear</span>
            <span className="text-violet-400 text-sm font-mono font-medium">
              {percent}%
            </span>
          </div>
          <Line
            percent={percent}
            strokeWidth={3}
            trailWidth={3}
            strokeColor="#8b5cf6"
            trailColor="rgba(255,255,255,0.06)"
            strokeLinecap="round"
          />
          <Line
            percent={percent * 0.7}
            strokeWidth={3}
            trailWidth={3}
            strokeColor="#6366f1"
            trailColor="rgba(255,255,255,0.06)"
            strokeLinecap="round"
          />
        </div>

        {/* Circle progress */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-24 h-24">
            <Circle
              percent={percent}
              strokeWidth={6}
              trailWidth={6}
              strokeColor="#8b5cf6"
              trailColor="rgba(255,255,255,0.06)"
              strokeLinecap="round"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-violet-400 text-lg font-mono font-bold">
                {percent}%
              </span>
            </div>
          </div>
          <span className="text-white/40 text-xs">Circular</span>
        </div>
      </div>
    </div>
  );
}
