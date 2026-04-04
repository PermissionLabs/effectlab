"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import ReactConfetti from "react-confetti";

export default function ConfettiDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isActive, setIsActive] = useState(true);

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <div
        ref={containerRef}
        className="relative w-full max-w-md h-64 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center"
      >
        {isActive && dimensions.width > 0 && (
          <ReactConfetti
            width={dimensions.width}
            height={dimensions.height}
            recycle={true}
            numberOfPieces={120}
            gravity={0.15}
            colors={["#f59e0b", "#3b82f6", "#ef4444", "#10b981", "#8b5cf6", "#ec4899"]}
          />
        )}
        <p className="text-2xl font-bold text-white z-10 select-none">
          {isActive ? "Party Time!" : "Click below to celebrate"}
        </p>
      </div>

      <button
        onClick={() => setIsActive((prev) => !prev)}
        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
      >
        {isActive ? "Stop Confetti" : "Launch Confetti"}
      </button>
    </div>
  );
}
