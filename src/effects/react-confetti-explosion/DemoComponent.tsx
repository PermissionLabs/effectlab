"use client";

import { useState, useCallback } from "react";
import ConfettiExplosion from "react-confetti-explosion";

export default function ReactConfettiExplosionDemo() {
  const [active, setActive] = useState(false);

  const fire = useCallback(() => {
    setActive(false);
    requestAnimationFrame(() => setActive(true));
  }, []);

  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-pointer select-none"
      style={{ overflow: "hidden" }}
      onClick={fire}
    >
      {active && (
        <ConfettiExplosion
          force={0.5}
          duration={2500}
          particleCount={50}
          width={220}
          onComplete={() => setActive(false)}
        />
      )}
      {!active && (
        <p className="text-white/30 text-xs pointer-events-none">click to explode</p>
      )}
    </div>
  );
}
