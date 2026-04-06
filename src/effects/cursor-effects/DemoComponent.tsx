"use client";

import { useEffect, useRef } from "react";
import { fairyDustCursor } from "cursor-effects";

export default function CursorEffectsDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const instance = new (fairyDustCursor as any)({
      element: containerRef.current,
      colors: ["#ff0080", "#7928ca", "#0070f3", "#50e3c2", "#f5a623"],
    });

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p className="text-white/40 text-sm select-none">
          Move your cursor here
        </p>
      </div>
    </div>
  );
}
