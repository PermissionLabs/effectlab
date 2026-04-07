"use client";

import { useState } from "react";
import { motion } from "motion/react";

const pages = [
  {
    accent: "#818cf8",
    bgGrad: "radial-gradient(circle at 30% 40%, #1e1b4b 0%, #0f0a2a 100%)",
    shapes: [
      { x: "15%", y: "25%", size: 80, color: "#6366f1", o: 0.3 },
      { x: "72%", y: "60%", size: 50, color: "#a78bfa", o: 0.2 },
    ],
    title: "Page 1",
    sub: "Swipe left →",
  },
  {
    accent: "#4ade80",
    bgGrad: "radial-gradient(circle at 60% 50%, #1a2e1a 0%, #0a1a0a 100%)",
    shapes: [
      { x: "60%", y: "28%", size: 70, color: "#22c55e", o: 0.3 },
      { x: "25%", y: "58%", size: 55, color: "#4ade80", o: 0.2 },
    ],
    title: "Page 2",
    sub: "← Swipe →",
  },
  {
    accent: "#fb923c",
    bgGrad: "radial-gradient(circle at 50% 60%, #2a1a1a 0%, #1a0a0a 100%)",
    shapes: [
      { x: "40%", y: "30%", size: 65, color: "#f97316", o: 0.3 },
      { x: "75%", y: "55%", size: 45, color: "#fb923c", o: 0.2 },
    ],
    title: "Page 3",
    sub: "← Swipe right",
  },
];

const N = pages.length;
const pct = 100 / N;

// Same destination, different spring speeds → parallax during transition only
const fgSpring = { type: "spring" as const, stiffness: 400, damping: 30 };
const bgSpring = { type: "spring" as const, stiffness: 120, damping: 28 };

export default function SwipeParallaxTransitionDemo() {
  const [idx, setIdx] = useState(0);

  const go = (dir: number) =>
    setIdx((i) => Math.max(0, Math.min(N - 1, i + dir)));

  const page = pages[idx];
  const target = `${idx * -pct}%`;

  return (
    <div className="w-full h-full relative overflow-hidden select-none">
      {/* BG strip — same target, slower spring → lags during transition */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={{ x: target }}
        transition={bgSpring}
        style={{ width: `${N * 100}%` }}
      >
        {pages.map((p, i) => (
          <div
            key={i}
            className="absolute inset-y-0"
            style={{
              left: `${i * pct}%`,
              width: `${pct}%`,
              background: p.bgGrad,
            }}
          >
            {p.shapes.map((s, j) => (
              <div
                key={j}
                className="absolute rounded-full"
                style={{
                  left: s.x, top: s.y,
                  width: s.size, height: s.size,
                  backgroundColor: s.color, opacity: s.o,
                }}
              />
            ))}
          </div>
        ))}
      </motion.div>

      {/* FG strip — same target, faster spring → arrives first */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={{ x: target }}
        transition={fgSpring}
        style={{ width: `${N * 100}%` }}
      >
        {pages.map((p, i) => (
          <div
            key={i}
            className="absolute inset-y-0 flex flex-col items-center justify-center"
            style={{ left: `${i * pct}%`, width: `${pct}%` }}
          >
            <div
              className="w-24 h-24 rounded-3xl mb-4 flex items-center justify-center border border-white/10"
              style={{
                background: `linear-gradient(135deg, ${p.accent}33, ${p.accent}11)`,
                boxShadow: `0 0 40px ${p.accent}22`,
              }}
            >
              <span className="text-3xl font-bold" style={{ color: p.accent }}>
                {i + 1}
              </span>
            </div>
            <p className="text-white/70 text-sm font-semibold">{p.title}</p>
            <p className="text-white/30 text-xs mt-1">{p.sub}</p>
          </div>
        ))}
      </motion.div>

      {/* Drag overlay — viewport-sized, swipe detection only */}
      <motion.div
        className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          if (info.offset.x < -40) go(1);
          else if (info.offset.x > 40) go(-1);
        }}
        style={{ touchAction: "pan-y" }}
      />

      {/* Dots */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-20 pointer-events-none">
        {pages.map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === idx ? page.accent : "rgba(255,255,255,0.2)",
              transform: i === idx ? "scale(1.5)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
