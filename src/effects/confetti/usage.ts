export const usage = {
  install: "bun add react-confetti",
  tsx: `"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import ReactConfetti from "react-confetti";

export default function ConfettiRain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 rounded-xl overflow-hidden"
    >
      {isActive && dimensions.width > 0 && (
        <ReactConfetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      <button onClick={() => setIsActive(true)}>
        Celebrate!
      </button>
    </div>
  );
}`,
};
