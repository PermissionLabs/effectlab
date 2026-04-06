"use client";

import { useReward } from "partycles";
import { useCallback, useState } from "react";

const EFFECTS: Array<{ type: "confetti" | "stars" | "hearts" | "fireworks" | "sparkles"; label: string }> = [
  { type: "confetti", label: "Confetti" },
  { type: "stars", label: "Stars" },
  { type: "hearts", label: "Hearts" },
  { type: "fireworks", label: "Fireworks" },
  { type: "sparkles", label: "Sparkles" },
];

export default function PartyclesDemo() {
  const [currentEffect, setCurrentEffect] = useState(0);
  const effect = EFFECTS[currentEffect];

  const { reward, isAnimating } = useReward("partycles-target", effect.type, {
    particleCount: 40,
    spread: 60,
    startVelocity: 35,
    colors: ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff", "#5f27cd"],
    lifetime: 150,
  });

  const handleClick = useCallback(() => {
    if (isAnimating) return;
    reward();
    setCurrentEffect((prev) => (prev + 1) % EFFECTS.length);
  }, [isAnimating, reward]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
      <p className="text-white/40 text-xs tracking-widest uppercase">
        {effect.label}
      </p>
      <button
        id="partycles-target"
        onClick={handleClick}
        className="px-8 py-4 rounded-2xl font-semibold text-white text-lg
          bg-gradient-to-br from-violet-600 to-fuchsia-500
          hover:from-violet-500 hover:to-fuchsia-400
          active:scale-95 transition-all duration-150
          shadow-[0_0_32px_rgba(139,92,246,0.3)]
          cursor-pointer select-none"
      >
        {isAnimating ? "..." : "Celebrate!"}
      </button>
      <p className="text-white/25 text-[11px]">
        Click to cycle effects
      </p>
    </div>
  );
}
