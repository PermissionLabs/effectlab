export const usage = {
  install: "bun add react-rewards",
  tsx: `"use client";

import { useReward } from "react-rewards";

export default function RewardsExample() {
  const { reward: confettiReward, isAnimating: isConfetti } = useReward(
    "confettiBtn",
    "confetti"
  );
  const { reward: emojiReward, isAnimating: isEmoji } = useReward(
    "emojiBtn",
    "emoji",
    { emoji: ["🎉", "🔥", "⭐"] }
  );
  const { reward: balloonsReward, isAnimating: isBalloons } = useReward(
    "balloonsBtn",
    "balloons"
  );

  return (
    <div className="flex gap-4 p-8">
      <button id="confettiBtn" onClick={confettiReward} disabled={isConfetti}>
        Confetti 🎊
      </button>
      <button id="emojiBtn" onClick={emojiReward} disabled={isEmoji}>
        Emoji 🎉
      </button>
      <button id="balloonsBtn" onClick={balloonsReward} disabled={isBalloons}>
        Balloons 🎈
      </button>
    </div>
  );
}`,
};
