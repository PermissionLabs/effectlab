"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

const COLS = 12;
const ROWS = 8;

export default function AnimejsDemo() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const dots = gridRef.current.querySelectorAll(".dot");

    const play = () => {
      animate(dots, {
        scale: [
          { to: 0.2, duration: 300 },
          { to: 1, duration: 800 },
        ],
        opacity: [
          { to: 1, duration: 300 },
          { to: 0.3, duration: 800 },
        ],
        backgroundColor: [
          { to: "#8b5cf6", duration: 300 },
          { to: "#3b82f6", duration: 500 },
          { to: "#06b6d4", duration: 300 },
        ],
        borderRadius: [
          { to: "2px", duration: 300 },
          { to: "50%", duration: 800 },
        ],
        delay: stagger(60, { grid: [COLS, ROWS], from: "center" }),
        loop: true,
        ease: "inOutQuad",
      });
    };

    play();
  }, []);

  return (
    <div ref={gridRef} className="w-full h-full flex items-center justify-center">
      <div
        className="grid gap-[6px]"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {Array.from({ length: COLS * ROWS }).map((_, i) => (
          <div
            key={i}
            className="dot w-3 h-3 rounded-full"
            style={{ backgroundColor: "#06b6d4", opacity: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
