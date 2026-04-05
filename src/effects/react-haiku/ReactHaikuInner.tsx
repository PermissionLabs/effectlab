"use client";

import { useState, useRef, useEffect } from "react";
import { useMousePosition } from "react-haiku";

export default function ReactHaikuInner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [relPos, setRelPos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });

  const { x: mouseX, y: mouseY } = useMousePosition();

  useEffect(() => {
    if (!containerRef.current || !isInside) return;
    const rect = containerRef.current.getBoundingClientRect();
    const rx = (mouseX ?? 0) - rect.left;
    const ry = (mouseY ?? 0) - rect.top;
    setRelPos({ x: rx, y: ry });
    targetRef.current = { x: rx, y: ry };
  }, [mouseX, mouseY, isInside]);

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let current = { x: 0, y: 0 };

    const animate = () => {
      current = {
        x: lerp(current.x, targetRef.current.x, 0.08),
        y: lerp(current.y, targetRef.current.y, 0.08),
      };
      setFollowerPos({ x: current.x, y: current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-4 gap-4">
      <div
        ref={containerRef}
        onMouseEnter={() => setIsInside(true)}
        onMouseLeave={() => setIsInside(false)}
        className="relative w-full max-w-lg h-72 rounded-xl overflow-hidden bg-white/5 border border-white/10 cursor-none"
      >
        {/* Glow follower */}
        {isInside && (
          <div
            className="pointer-events-none absolute"
            style={{
              left: followerPos.x - 30,
              top: followerPos.y - 30,
              width: 60,
              height: 60,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(139,92,246,0.3) 40%, transparent 70%)",
              boxShadow: "0 0 40px 10px rgba(139,92,246,0.3)",
            }}
          />
        )}

        {/* Secondary trail ring */}
        {isInside && (
          <div
            className="pointer-events-none absolute"
            style={{
              left: followerPos.x - 50,
              top: followerPos.y - 50,
              width: 100,
              height: 100,
              borderRadius: "50%",
              border: "1px solid rgba(139,92,246,0.2)",
              transition: "left 0.15s ease-out, top 0.15s ease-out",
            }}
          />
        )}

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white/30 text-sm select-none">
            {isInside ? "Move your cursor around" : "Hover over this area"}
          </p>
        </div>
      </div>

      {/* Coordinates display */}
      <div className="flex gap-6 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-white/40">Mouse</span>
          <span className="text-violet-400">
            x: {Math.round(relPos.x)} y: {Math.round(relPos.y)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/40">Follower</span>
          <span className="text-violet-300">
            x: {Math.round(followerPos.x)} y: {Math.round(followerPos.y)}
          </span>
        </div>
      </div>
    </div>
  );
}
