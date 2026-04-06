export const usage = {
  install: "bun add cursor-effects",
  tsx: `"use client";

import { useEffect, useRef } from "react";
import { fairyDustCursor } from "cursor-effects";

export default function CursorTrailDemo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const fx = new fairyDustCursor({ element: ref.current });
    return () => fx.destroy();
  }, []);

  return (
    <div ref={ref} style={{ width: "100%", height: "400px", position: "relative" }}>
      <p>Move your cursor here</p>
    </div>
  );
}`,
};
