"use client";

import { useState, useEffect } from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

const items = [
  { label: "Storage", target: 25, color: "#8b5cf6" },
  { label: "CPU", target: 65, color: "#a78bfa" },
  { label: "Memory", target: 92, color: "#c4b5fd" },
];

export default function ReactCircularProgressbarDemo() {
  const [values, setValues] = useState([0, 0, 0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValues(items.map((i) => i.target));
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div className="flex items-end gap-4">
        {items.map((item, i) => (
          <div key={item.label} className="flex flex-col items-center gap-2">
            <div
              style={{ width: 72 + i * 16, height: 72 + i * 16 }}
            >
              <CircularProgressbar
                value={values[i]}
                text={`${values[i]}%`}
                styles={buildStyles({
                  textSize: "18px",
                  pathTransitionDuration: 1.5,
                  pathColor: item.color,
                  textColor: "#fff",
                  trailColor: "rgba(139,92,246,0.15)",
                })}
              />
            </div>
            <span className="text-white/60 text-xs font-medium tracking-wide uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
