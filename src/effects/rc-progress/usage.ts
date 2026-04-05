export const usage = {
  install: "bun add rc-progress",
  tsx: `"use client";

import { useState, useEffect } from "react";
import { Line, Circle } from "rc-progress";

export default function ProgressDemo() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((p) => {
        if (p >= 85) { clearInterval(timer); return 85; }
        return p + 1;
      });
    }, 25);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: "flex", gap: 32, padding: 24, alignItems: "center" }}>
      <div style={{ flex: 1 }}>
        <p>Line Progress</p>
        <Line
          percent={percent}
          strokeWidth={4}
          trailWidth={4}
          strokeColor="#8b5cf6"
          trailColor="#e5e7eb"
          strokeLinecap="round"
        />
      </div>
      <div style={{ width: 120, height: 120, position: "relative" }}>
        <Circle
          percent={percent}
          strokeWidth={6}
          trailWidth={6}
          strokeColor="#8b5cf6"
          trailColor="#e5e7eb"
          strokeLinecap="round"
        />
        <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
          {percent}%
        </span>
      </div>
    </div>
  );
}`,
};
