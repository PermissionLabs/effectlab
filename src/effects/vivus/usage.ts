export const usage = {
  install: "bun add vivus",
  tsx: `"use client";

import { useEffect, useRef } from "react";
import Vivus from "vivus";

export default function VivusDemo() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const vivus = new Vivus(svgRef.current, {
      duration: 200,
      type: "oneByOne",
      animTimingFunction: Vivus.EASE_OUT,
    });

    vivus.play();

    return () => vivus.destroy();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 200"
      width={200}
      height={200}
      fill="none"
    >
      <circle cx="100" cy="100" r="80" stroke="#06b6d4" strokeWidth="2" />
      <polygon
        points="100,30 160,75 140,145 60,145 40,75"
        stroke="#a855f7"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="100" cy="100" r="40" stroke="#22d3ee" strokeWidth="1.5" />
    </svg>
  );
}`,
};
