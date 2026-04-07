export const usage = {
  install: "bun add flubber @types/flubber",
  tsx: `"use client";

import { useEffect, useRef, useState } from "react";
import { interpolate } from "flubber";

const circle = "M 50,0 A 50,50 0 1,1 50,100 A 50,50 0 1,1 50,0 Z";
const star =
  "M 50,0 L 61,35 L 98,35 L 68,57 L 79,91 L 50,70 L 21,91 L 32,57 L 2,35 L 39,35 Z";
const triangle = "M 50,0 L 100,87 L 0,87 Z";
const heart =
  "M 50,90 C 25,70 0,50 0,30 A 25,25 0 0,1 50,30 A 25,25 0 0,1 100,30 C 100,50 75,70 50,90 Z";

const shapes = [circle, star, triangle, heart];

export default function FlubberDemo() {
  const [shapeIndex, setShapeIndex] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const tRef = useRef(0);
  const interpRef = useRef<((t: number) => string) | null>(null);

  useEffect(() => {
    const from = shapes[shapeIndex];
    const to = shapes[(shapeIndex + 1) % shapes.length];
    interpRef.current = interpolate(from, to, { maxSegmentLength: 2 });

    let raf: number;
    tRef.current = 0;

    function tick() {
      tRef.current += 0.015;
      if (tRef.current >= 1) {
        setShapeIndex((i) => (i + 1) % shapes.length);
        return;
      }
      if (pathRef.current && interpRef.current) {
        pathRef.current.setAttribute("d", interpRef.current(tRef.current));
      }
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shapeIndex]);

  return (
    <svg viewBox="0 0 100 100" width={200} height={200}>
      <defs>
        <linearGradient id="morph-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path ref={pathRef} d={shapes[0]} fill="url(#morph-grad)" />
    </svg>
  );
}`,
};
