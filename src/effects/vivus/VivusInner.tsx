"use client";

import { useEffect, useRef, useCallback } from "react";
import Vivus from "vivus";

export default function VivusInner() {
  const svgRef = useRef<SVGSVGElement>(null);
  const vivusRef = useRef<Vivus | null>(null);

  const initVivus = useCallback(() => {
    if (!svgRef.current) return;

    vivusRef.current = new Vivus(svgRef.current, {
      duration: 150,
      type: "oneByOne",
      animTimingFunction: Vivus.EASE_OUT,
      onReady: () => {
        vivusRef.current?.play();
      },
    });

    // Loop: restart after a pause
    const interval = setInterval(() => {
      if (vivusRef.current) {
        vivusRef.current.reset().play();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      vivusRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    const cleanup = initVivus();
    return cleanup;
  }, [initVivus]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        ref={svgRef}
        viewBox="0 0 200 200"
        className="w-3/5 h-3/5 max-w-[220px] max-h-[220px]"
        fill="none"
      >
        {/* Outer circle */}
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="url(#vivus-grad)"
          strokeWidth="1.5"
        />
        {/* Inner circle */}
        <circle
          cx="100"
          cy="100"
          r="60"
          stroke="url(#vivus-grad)"
          strokeWidth="1.5"
        />
        {/* Hexagon */}
        <polygon
          points="100,25 165,62.5 165,137.5 100,175 35,137.5 35,62.5"
          stroke="#06b6d4"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Inner diamond */}
        <polygon
          points="100,50 150,100 100,150 50,100"
          stroke="#a855f7"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Cross lines */}
        <line x1="100" y1="10" x2="100" y2="190" stroke="#06b6d4" strokeWidth="0.8" opacity="0.6" />
        <line x1="10" y1="100" x2="190" y2="100" stroke="#06b6d4" strokeWidth="0.8" opacity="0.6" />
        {/* Diagonal lines */}
        <line x1="30" y1="30" x2="170" y2="170" stroke="#a855f7" strokeWidth="0.8" opacity="0.5" />
        <line x1="170" y1="30" x2="30" y2="170" stroke="#a855f7" strokeWidth="0.8" opacity="0.5" />
        {/* Small inner triangles */}
        <polygon
          points="100,65 120,100 80,100"
          stroke="#22d3ee"
          strokeWidth="1.2"
          fill="none"
        />
        <polygon
          points="100,135 80,100 120,100"
          stroke="#22d3ee"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Decorative arcs */}
        <path
          d="M 40,40 A 85,85 0 0,1 160,40"
          stroke="#a855f7"
          strokeWidth="1"
          opacity="0.7"
        />
        <path
          d="M 160,160 A 85,85 0 0,1 40,160"
          stroke="#06b6d4"
          strokeWidth="1"
          opacity="0.7"
        />
        <defs>
          <linearGradient id="vivus-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
