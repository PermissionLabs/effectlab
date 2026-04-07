"use client";

import { useState } from "react";
import { motion, useAnimate } from "motion/react";

const icons = [
  { emoji: "💬", label: "Messages" },
  { emoji: "📧", label: "Mail" },
  { emoji: "🎵", label: "Music" },
  { emoji: "📸", label: "Photos" },
  { emoji: "⚙️", label: "Settings" },
  { emoji: "🗓️", label: "Calendar" },
];

function DockIcon({
  emoji,
  label,
  bouncing,
  onBounce,
}: {
  emoji: string;
  label: string;
  bouncing: boolean;
  onBounce: () => void;
}) {
  const [scope, animate] = useAnimate();

  const triggerBounce = async () => {
    onBounce();
    // macOS dock bounce: 3 bounces with decreasing height
    await animate(
      scope.current,
      { y: [0, -24, 0, -14, 0, -6, 0] },
      { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    );
  };

  return (
    <motion.button
      ref={scope}
      onClick={triggerBounce}
      whileHover={{ scale: 1.3, y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="relative flex flex-col items-center gap-1 group"
    >
      <div className="w-12 h-12 rounded-[14px] bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-white/15 transition-colors">
        {emoji}
      </div>
      <span className="text-[9px] text-white/40 group-hover:text-white/60 transition-colors">
        {label}
      </span>
      {bouncing && (
        <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-white/60" />
      )}
    </motion.button>
  );
}

export default function DockBounceDemo() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-end pb-6">
      {/* Info */}
      <p className="text-white/20 text-xs mb-auto mt-8">Click icons to bounce</p>

      {/* Dock bar */}
      <div className="flex items-end gap-1 px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl">
        {icons.map((icon, i) => (
          <DockIcon
            key={icon.label}
            emoji={icon.emoji}
            label={icon.label}
            bouncing={activeIdx === i}
            onBounce={() => setActiveIdx(i)}
          />
        ))}
      </div>
    </div>
  );
}
