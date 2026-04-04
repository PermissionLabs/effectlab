export const usage = {
  install: "bun add motion",
  tsx: `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const cards = [
  { id: 1, color: "bg-blue-500", label: "Card A" },
  { id: 2, color: "bg-emerald-500", label: "Card B" },
  { id: 3, color: "bg-amber-500", label: "Card C" },
  { id: 4, color: "bg-rose-500", label: "Card D" },
];

export default function LayoutAnimation() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-3">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={\`card-\${card.id}\`}
            onClick={() =>
              setExpandedId(expandedId === card.id ? null : card.id)
            }
            className={\`\${card.color} rounded-xl cursor-pointer flex items-center justify-center text-white font-semibold \${
              expandedId === card.id
                ? "col-span-2 h-40"
                : "h-20"
            }\`}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.span layout="position">{card.label}</motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}`,
};
