export const usage = {
  install: "bun add react-animated-numbers",
  tsx: `"use client";

import { useState, useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";

export default function StatsCounter() {
  const [count, setCount] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <AnimatedNumbers
        useThousandsSeparator
        animateToNumber={count}
        fontStyle={{
          fontSize: "2.5rem",
          fontWeight: 700,
          color: "#ffffff",
        }}
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.3,
          damping: 15,
          stiffness: 120,
        })}
      />
      <span style={{ fontSize: "1rem", color: "#888" }}>users</span>
    </div>
  );
}`,
};
