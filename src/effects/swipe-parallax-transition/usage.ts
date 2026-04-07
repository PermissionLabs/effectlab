export const usage = {
  install: "bun add motion",
  tsx: `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const pages = [
  { bg: "#1e1b4b", title: "Welcome" },
  { bg: "#1a2e1a", title: "Features" },
  { bg: "#2a1a1a", title: "Get Started" },
];

// Background moves at 40% of foreground speed — the parallax
const BG_FACTOR = 0.4;

export default function SwipeParallax() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (dir: number) => {
    setCurrent(([prev]) => {
      const next = prev + dir;
      if (next < 0 || next >= pages.length) return [prev, 0];
      return [next, dir];
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        {/* Background — moves slower (parallax) */}
        <motion.div
          key={\`bg-\${current}\`}
          custom={direction}
          initial={(d: number) => ({ x: \`\${d * 100 * BG_FACTOR}%\` })}
          animate={{ x: "0%" }}
          exit={(d: number) => ({ x: \`\${d * -100 * BG_FACTOR}%\` })}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0"
          style={{ backgroundColor: pages[current].bg }}
        />

        {/* Foreground — moves at full speed */}
        <motion.div
          key={\`fg-\${current}\`}
          custom={direction}
          initial={(d: number) => ({ x: \`\${d * 100}%\` })}
          animate={{ x: "0%" }}
          exit={(d: number) => ({ x: \`\${d * -100}%\` })}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.3}
          onDragEnd={(_e, info) => {
            if (info.offset.x < -50) paginate(1);
            else if (info.offset.x > 50) paginate(-1);
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-white text-4xl font-bold">
            {pages[current].title}
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}`,
};
