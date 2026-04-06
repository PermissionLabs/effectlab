"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const colors = ["#8b5cf6", "#06b6d4", "#f43f5e", "#22c55e", "#f59e0b"];

export default function MotionDemo() {
  const [selected, setSelected] = useState(0);
  const [tapped, setTapped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 p-6">
      {/* Animated card with layout + spring */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, scale: 0.8, y: 20, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20, rotateY: 15 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onTapStart={() => setTapped(true)}
          onTap={() => setTapped(false)}
          onTapCancel={() => setTapped(false)}
          className="w-40 h-40 rounded-2xl cursor-pointer flex items-center justify-center"
          style={{ backgroundColor: colors[selected] }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 400 }}
            className="text-white text-4xl font-bold"
          >
            {selected + 1}
          </motion.span>
        </motion.div>
      </AnimatePresence>

      {/* Staggered dots */}
      <div className="flex gap-3">
        {colors.map((color, i) => (
          <motion.button
            key={color}
            onClick={() => setSelected(i)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 500 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            className="relative w-4 h-4 rounded-full cursor-pointer"
            style={{ backgroundColor: `${color}66` }}
          >
            {selected === i && (
              <motion.div
                layoutId="indicator"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: color }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Gesture hint */}
      <motion.p
        animate={{ opacity: tapped ? 1 : 0.4 }}
        className="text-white/40 text-xs"
      >
        tap & hover the card
      </motion.p>
    </div>
  );
}
