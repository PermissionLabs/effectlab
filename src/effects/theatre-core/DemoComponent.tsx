"use client";

import { useEffect, useRef, useCallback } from "react";
import { types } from "@theatre/core";

/**
 * Theatre.js choreographed demo — uses Theatre.js `types` to define
 * animation prop schemas, then drives a timeline loop via rAF.
 * Avoids getProject() which requires studio-exported state.
 */

const propSchemas = [
  {
    label: "Circle",
    color: "#8b5cf6",
    borderRadius: "50%",
    size: 40,
    schema: {
      x: types.number(0, { range: [-200, 200] }),
      y: types.number(0, { range: [-200, 200] }),
      scale: types.number(1, { range: [0, 2] }),
      rotation: types.number(0, { range: [0, 360] }),
      opacity: types.number(1, { range: [0, 1] }),
    },
  },
  {
    label: "Square",
    color: "#06b6d4",
    borderRadius: "8px",
    size: 36,
    schema: {
      x: types.number(0, { range: [-200, 200] }),
      scale: types.number(1, { range: [0, 2] }),
    },
  },
  {
    label: "Diamond",
    color: "#f43f5e",
    borderRadius: "6px",
    size: 30,
    schema: {
      rotation: types.number(0, { range: [0, 360] }),
      opacity: types.number(1, { range: [0, 1] }),
    },
  },
  {
    label: "Pill",
    color: "#22c55e",
    borderRadius: "50%",
    size: 34,
    schema: {
      y: types.number(0, { range: [-200, 200] }),
      scale: types.number(1, { range: [0, 2] }),
    },
  },
];

const DURATION = 5;

function computeValues(t: number, index: number, total: number) {
  const phase = (index / total) * Math.PI * 2;
  const orbitRadius = 65;
  const angle = t * Math.PI * 2 + phase;
  const cx =
    Math.cos(angle) *
    orbitRadius *
    (0.8 + 0.4 * Math.sin(t * Math.PI * 4 + phase));
  const cy = Math.sin(angle) * orbitRadius * 0.6;
  const scale = 0.7 + 0.5 * Math.sin(t * Math.PI * 3 + phase);
  const rotation = t * 360 + index * 90;
  const fadeIn = Math.min(1, (t * DURATION) / 0.5);
  const opacity = fadeIn * (0.6 + 0.4 * Math.sin(t * Math.PI * 2 + phase));
  return { cx, cy, scale, rotation, opacity };
}

export default function TheatreCoreDemo() {
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const animate = useCallback(() => {
    const now = performance.now() / 1000;
    const elapsed = now - startTimeRef.current;
    const t = (elapsed % DURATION) / DURATION;

    propSchemas.forEach((_shape, i) => {
      const el = shapeRefs.current[i];
      if (!el) return;
      const v = computeValues(t, i, propSchemas.length);
      el.style.transform = `translate(${v.cx}px, ${v.cy}px) rotate(${v.rotation}deg) scale(${v.scale})`;
      el.style.opacity = String(v.opacity);
    });

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    startTimeRef.current = performance.now() / 1000;
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.08 }}
      >
        <circle
          cx="50%"
          cy="50%"
          r="65"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <circle
          cx="50%"
          cy="50%"
          r="40"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          strokeDasharray="2 6"
        />
      </svg>

      {propSchemas.map((shape, i) => (
        <div
          key={shape.label}
          ref={(el) => {
            shapeRefs.current[i] = el;
          }}
          className="absolute"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            borderRadius: shape.borderRadius,
            boxShadow: `0 0 24px ${shape.color}55, 0 0 48px ${shape.color}22`,
            willChange: "transform, opacity",
            opacity: 0,
          }}
        />
      ))}

      <div
        className="absolute w-2 h-2 rounded-full"
        style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
      />

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <div className="flex gap-1">
          {propSchemas.map((s) => (
            <div
              key={s.label}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: s.color, opacity: 0.6 }}
            />
          ))}
        </div>
        <p className="text-white/25 text-[10px] tracking-wider uppercase">
          timeline
        </p>
      </div>
    </div>
  );
}
