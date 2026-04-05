export const usage = {
  install: "bun add react-circular-progressbar",
  tsx: `"use client";

import { useState, useEffect } from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgressExample() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setValue(72), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ width: 120, height: 120 }}>
      <CircularProgressbar
        value={value}
        text={\`\${value}%\`}
        styles={buildStyles({
          textSize: "18px",
          pathTransitionDuration: 1.5,
          pathColor: "#8b5cf6",
          textColor: "#fff",
          trailColor: "rgba(139,92,246,0.15)",
        })}
      />
    </div>
  );
}`,
};
