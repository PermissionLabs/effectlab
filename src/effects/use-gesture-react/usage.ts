export const usage = {
  install: "bun add @use-gesture/react",
  tsx: `"use client";

import { useState } from "react";
import { useDrag } from "@use-gesture/react";

export default function DraggableCard() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const bind = useDrag(({ movement: [mx, my], first, memo }) => {
    if (first) memo = { x: pos.x, y: pos.y };
    const start = memo || { x: 0, y: 0 };
    setPos({ x: start.x + mx, y: start.y + my });
    return memo;
  });

  return (
    <div
      {...bind()}
      style={{
        transform: \`translate(\${pos.x}px, \${pos.y}px)\`,
        touchAction: "none",
        width: 150,
        height: 150,
        background: "rgba(139,92,246,0.2)",
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab",
        userSelect: "none",
      }}
    >
      Drag me
    </div>
  );
}`,
};
