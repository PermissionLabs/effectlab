export const usage = {
  install: "bun add partycles",
  tsx: `"use client";
import { useReward } from "partycles";

export default function CelebrateButton() {
  const { reward, isAnimating } = useReward(
    "reward-btn",
    "confetti",
    {
      particleCount: 40,
      spread: 60,
      colors: ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff"],
    }
  );

  return (
    <button
      id="reward-btn"
      onClick={() => !isAnimating && reward()}
      style={{
        padding: "12px 32px",
        fontSize: 18,
        borderRadius: 12,
        background: "linear-gradient(135deg, #7c3aed, #d946ef)",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
    >
      {isAnimating ? "🎉" : "Celebrate!"}
    </button>
  );
}`,
};
