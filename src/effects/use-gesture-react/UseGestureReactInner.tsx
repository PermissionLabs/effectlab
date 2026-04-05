"use client";

import { useState, useRef } from "react";
import { useDrag } from "@use-gesture/react";

export default function UseGestureReactInner() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const initialPos = useRef({ x: 0, y: 0 });

  const bind = useDrag(({ active, movement: [mx, my], first, memo }) => {
    if (first) {
      memo = { x: pos.x, y: pos.y };
      initialPos.current = { x: pos.x, y: pos.y };
    }
    const startPos = memo || initialPos.current;
    const newX = startPos.x + mx;
    const newY = startPos.y + my;
    setPos({ x: newX, y: newY });
    setCoords({ x: Math.round(newX), y: Math.round(newY) });
    setDragging(active);
    return memo;
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4 select-none">
      <p className="text-white/60 text-xs uppercase tracking-widest">
        Drag the card around
      </p>
      <div className="relative flex-1 w-full flex items-center justify-center">
        <div
          {...bind()}
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            touchAction: "none",
          }}
          className={`cursor-grab active:cursor-grabbing w-40 h-40 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-shadow duration-200 ${
            dragging
              ? "bg-violet-500/20 border-violet-500/40 shadow-lg shadow-violet-500/20"
              : "bg-white/5 border-white/10 hover:border-white/20"
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-violet-400"
            >
              <path
                d="M8 2L8 14M2 8L14 8M4 4L12 12M12 4L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-white/70 text-xs font-medium">Drag Me</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
          <span className="text-white/40 text-xs">X:</span>
          <span className="text-cyan-400 text-xs font-mono font-medium">{coords.x}</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
          <span className="text-white/40 text-xs">Y:</span>
          <span className="text-cyan-400 text-xs font-mono font-medium">{coords.y}</span>
        </div>
        <div
          className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
            dragging
              ? "bg-violet-500/15 text-violet-400 border border-violet-500/20"
              : "bg-white/5 text-white/40 border border-white/10"
          }`}
        >
          {dragging ? "Dragging" : "Idle"}
        </div>
      </div>
    </div>
  );
}
