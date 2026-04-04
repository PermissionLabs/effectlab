export const usage = {
  install: "bun add @number-flow/react",
  tsx: `"use client";

import { useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";

export default function AnimatedNumber() {
  const [value, setValue] = useState(12345);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => prev + Math.floor(Math.random() * 200 + 50));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-6xl font-bold tabular-nums">
      $<NumberFlow
        value={value}
        format={{ useGrouping: true }}
        transformTiming={{ duration: 750, easing: "ease-out" }}
      />
    </div>
  );
}`,
};
