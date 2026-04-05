export const usage = {
  install: "bun add react-haiku",
  tsx: `"use client";

import { useMousePosition } from "react-haiku";
import { useState } from "react";

export default function CursorFollower() {
  const { x, y } = useMousePosition();
  const [follower, setFollower] = useState({ x: 0, y: 0 });

  // Smooth follow with CSS transition
  return (
    <div className="relative w-full h-screen bg-black cursor-none">
      {/* Glow cursor */}
      <div
        className="pointer-events-none fixed"
        style={{
          left: (x ?? 0) - 30,
          top: (y ?? 0) - 30,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)",
          boxShadow: "0 0 40px 10px rgba(139,92,246,0.3)",
          transition: "left 0.1s ease-out, top 0.1s ease-out",
        }}
      />

      {/* Coordinate display */}
      <div className="fixed bottom-4 left-4 text-white/50 text-xs font-mono">
        x: {x ?? 0} y: {y ?? 0}
      </div>
    </div>
  );
}`,
};
