"use client";

import { useEffect, useRef, useCallback } from "react";
import { interpolate } from "flubber";

/* ---------- shape paths (centered in 0–200 viewBox) ---------- */

const circle =
  "M 100,10 A 90,90 0 1,1 100,190 A 90,90 0 1,1 100,10 Z";

const star =
  "M 100,10 L 120,75 L 190,75 L 133,115 L 155,180 L 100,143 L 45,180 L 67,115 L 10,75 L 80,75 Z";

const triangle =
  "M 100,15 L 190,175 L 10,175 Z";

const hexagon =
  "M 100,10 L 178,55 L 178,145 L 100,190 L 22,145 L 22,55 Z";

const heart =
  "M 100,175 C 60,145 10,115 10,65 A 45,45 0 0,1 100,55 A 45,45 0 0,1 190,65 C 190,115 140,145 100,175 Z";

const shapes = [circle, star, triangle, hexagon, heart];
const colors = [
  ["#a855f7", "#6366f1"], // purple → indigo
  ["#f59e0b", "#ef4444"], // amber → red
  ["#06b6d4", "#10b981"], // cyan → emerald
  ["#ec4899", "#f43f5e"], // pink → rose
  ["#8b5cf6", "#06b6d4"], // violet → cyan
];

export default function FlubberDemo() {
  const pathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const stop1Ref = useRef<SVGStopElement>(null);
  const stop2Ref = useRef<SVGStopElement>(null);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    let pairIndex = 0;
    let t = 0;
    const speed = 0.008;

    function getInterp() {
      const from = shapes[pairIndex % shapes.length];
      const to = shapes[(pairIndex + 1) % shapes.length];
      return interpolate(from, to, { maxSegmentLength: 2 });
    }

    let interp = getInterp();

    function lerpColor(a: string, b: string, p: number): string {
      const parse = (hex: string) => [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16),
      ];
      const ca = parse(a);
      const cb = parse(b);
      const r = Math.round(ca[0] + (cb[0] - ca[0]) * p);
      const g = Math.round(ca[1] + (cb[1] - ca[1]) * p);
      const bl = Math.round(ca[2] + (cb[2] - ca[2]) * p);
      return `rgb(${r},${g},${bl})`;
    }

    function tick() {
      t += speed;

      if (t >= 1) {
        t = 0;
        pairIndex = (pairIndex + 1) % shapes.length;
        interp = getInterp();
      }

      const d = interp(t);
      if (pathRef.current) pathRef.current.setAttribute("d", d);
      if (glowRef.current) glowRef.current.setAttribute("d", d);

      // lerp gradient colors between current and next pair
      const fromColors = colors[pairIndex % colors.length];
      const toColors = colors[(pairIndex + 1) % colors.length];
      if (stop1Ref.current) {
        stop1Ref.current.setAttribute(
          "stop-color",
          lerpColor(fromColors[0], toColors[0], t)
        );
      }
      if (stop2Ref.current) {
        stop2Ref.current.setAttribute(
          "stop-color",
          lerpColor(fromColors[1], toColors[1], t)
        );
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    animate();
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-3/5 h-3/5 max-w-[240px] max-h-[240px]"
        style={{ filter: "drop-shadow(0 0 24px rgba(139,92,246,0.5))" }}
      >
        <defs>
          <linearGradient id="flubber-grad" x1="0" y1="0" x2="1" y2="1">
            <stop ref={stop1Ref} offset="0%" stopColor="#a855f7" />
            <stop ref={stop2Ref} offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <filter id="flubber-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* glow layer */}
        <path
          ref={glowRef}
          d={circle}
          fill="url(#flubber-grad)"
          opacity={0.35}
          filter="url(#flubber-glow)"
        />
        {/* main shape */}
        <path
          ref={pathRef}
          d={circle}
          fill="url(#flubber-grad)"
        />
      </svg>
    </div>
  );
}
