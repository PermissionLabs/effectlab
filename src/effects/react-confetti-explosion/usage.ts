export const usage = {
  install: "bun add react-confetti-explosion",
  tsx: `"use client";

import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

export default function ConfettiDemo() {
  const [isExploding, setIsExploding] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <button
        onClick={() => {
          setIsExploding(false);
          setTimeout(() => setIsExploding(true), 10);
        }}
        style={{
          padding: "12px 24px",
          borderRadius: 8,
          background: "#6366f1",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        Celebrate!
      </button>
      {isExploding && (
        <ConfettiExplosion
          force={0.8}
          duration={3000}
          particleCount={100}
          width={400}
        />
      )}
    </div>
  );
}`,
};
