"use client";

import { useState, useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";

const stats = [
  { label: "Downloads", base: 128450, range: 5000, prefix: "" },
  { label: "Stars", base: 4720, range: 300, prefix: "" },
  { label: "Users", base: 31200, range: 2000, prefix: "" },
  { label: "Commits", base: 892, range: 50, prefix: "" },
];

function randomize(base: number, range: number) {
  return base + Math.floor(Math.random() * range);
}

export default function AnimatedNumbersInner() {
  const [values, setValues] = useState(() =>
    stats.map((s) => randomize(s.base, s.range))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(stats.map((s) => randomize(s.base, s.range)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        gap: "1.2rem",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.2rem",
          width: "100%",
          maxWidth: "320px",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.3rem",
              padding: "0.8rem 0.5rem",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <AnimatedNumbers
                useThousandsSeparator
                animateToNumber={values[i]}
                fontStyle={{
                  fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
                  fontWeight: 700,
                  color: "#a78bfa",
                  fontFamily:
                    "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                }}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                  damping: 15,
                  stiffness: 120,
                })}
              />
            </div>
            <span
              style={{
                fontSize: "clamp(0.55rem, 1.5vw, 0.7rem)",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.4)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
