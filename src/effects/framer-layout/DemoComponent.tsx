"use client";

import { useState } from "react";
import { motion } from "motion/react";

const cards = [
  { id: 1, color: "bg-blue-500", label: "Card A" },
  { id: 2, color: "bg-emerald-500", label: "Card B" },
  { id: 3, color: "bg-amber-500", label: "Card C" },
  { id: 4, color: "bg-rose-500", label: "Card D" },
];

export default function FramerLayoutDemo() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="relative w-full max-w-sm">
        <div className="grid grid-cols-2 gap-3">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              layoutId={`card-${card.id}`}
              onClick={() =>
                setExpandedId(expandedId === card.id ? null : card.id)
              }
              className={`${card.color} rounded-xl cursor-pointer flex items-center justify-center text-white font-semibold select-none ${
                expandedId === card.id ? "col-span-2 h-40" : "h-20"
              }`}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.span layout="position">
                {card.label}
                {expandedId === card.id && (
                  <span className="block text-sm font-normal opacity-80 mt-1">
                    Click to collapse
                  </span>
                )}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="text-xs text-white/40">Click a card to expand</p>
    </div>
  );
}
