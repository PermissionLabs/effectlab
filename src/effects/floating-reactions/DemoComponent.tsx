"use client";

import { useState } from "react";
import { motion } from "motion/react";

const items = [
  { emoji: "⚡", x: 18, y: 25, delay: 0 },
  { emoji: "🎨", x: 72, y: 18, delay: 0.12 },
  { emoji: "🚀", x: 42, y: 55, delay: 0.24 },
  { emoji: "✨", x: 82, y: 60, delay: 0.08 },
  { emoji: "💎", x: 28, y: 70, delay: 0.2 },
  { emoji: "🔥", x: 58, y: 30, delay: 0.16 },
  { emoji: "🎯", x: 15, y: 48, delay: 0.3 },
  { emoji: "💡", x: 68, y: 42, delay: 0.06 },
];

export default function FloatingElementsDemo() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col">
      <div className="flex-1 relative">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.5 }}
            animate={
              visible
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: -40, scale: 0.7 }
            }
            transition={{
              duration: visible ? 0.6 : 0.35,
              delay: visible ? item.delay : 0,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="absolute pointer-events-none"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
          >
            {/* Inner: spring bob on y-axis */}
            <motion.span
              className="text-3xl block"
              animate={visible ? { y: [0, -14, 0] } : { y: 0 }}
              transition={
                visible
                  ? {
                      duration: 2 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay + 0.6,
                    }
                  : { duration: 0.2 }
              }
            >
              {item.emoji}
            </motion.span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.4, delay: visible ? 0.4 : 0 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <p className="text-white/20 text-xs font-medium">
            {visible ? "Idle: bobbing" : "Exited"}
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 p-3 flex justify-center">
        <button
          onClick={() => setVisible((v) => !v)}
          className="px-5 h-9 rounded-full bg-white/5 border border-white/10 text-[12px] text-white/60 hover:bg-white/10 hover:text-white/80 active:scale-95 transition-all font-medium"
        >
          {visible ? "Exit" : "Enter"}
        </button>
      </div>
    </div>
  );
}
