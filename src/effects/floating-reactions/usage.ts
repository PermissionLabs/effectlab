export const usage = {
  install: "bun add motion",
  tsx: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

const items = [
  { emoji: "⚡", x: 15, y: 20, delay: 0 },
  { emoji: "🎨", x: 70, y: 15, delay: 0.1 },
  { emoji: "🚀", x: 40, y: 50, delay: 0.2 },
  { emoji: "✨", x: 80, y: 55, delay: 0.05 },
  { emoji: "💎", x: 25, y: 65, delay: 0.15 },
];

export default function FloatingElements({ visible = true }) {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {items.map((item, i) => (
        {/* Outer: enter/exit animation */}
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute"
          style={{ left: \`\${item.x}%\`, top: \`\${item.y}%\` }}
        >
          {/* Inner: idle bob animation */}
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
    </div>
  );
}`,
};
