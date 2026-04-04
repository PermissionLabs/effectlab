"use client";

import { useReward } from "react-rewards";

export default function ReactRewardsDemo() {
  const { reward: confettiReward, isAnimating: isConfetti } = useReward(
    "confettiBtn",
    "confetti",
    { lifetime: 200, elementCount: 80, spread: 60 }
  );
  const { reward: emojiReward, isAnimating: isEmoji } = useReward(
    "emojiBtn",
    "emoji",
    { emoji: ["🎉", "🔥", "⭐", "💜", "✨"], elementCount: 20, spread: 50 }
  );
  const { reward: balloonsReward, isAnimating: isBalloons } = useReward(
    "balloonsBtn",
    "balloons",
    { lifetime: 300, elementCount: 15, spread: 70 }
  );

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6 p-6">
      <p className="text-white/60 text-xs uppercase tracking-widest">
        Click a button to fire rewards
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          id="confettiBtn"
          onClick={confettiReward}
          disabled={isConfetti}
          className="px-5 py-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 text-sm font-medium transition-all border border-amber-500/20 active:scale-95 disabled:opacity-50"
        >
          Confetti
        </button>
        <button
          id="emojiBtn"
          onClick={emojiReward}
          disabled={isEmoji}
          className="px-5 py-3 rounded-xl bg-pink-500/15 hover:bg-pink-500/25 text-pink-400 text-sm font-medium transition-all border border-pink-500/20 active:scale-95 disabled:opacity-50"
        >
          Emoji
        </button>
        <button
          id="balloonsBtn"
          onClick={balloonsReward}
          disabled={isBalloons}
          className="px-5 py-3 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-400 text-sm font-medium transition-all border border-sky-500/20 active:scale-95 disabled:opacity-50"
        >
          Balloons
        </button>
      </div>
    </div>
  );
}
