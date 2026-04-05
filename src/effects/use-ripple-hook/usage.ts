export const usage = {
  install: "bun add use-ripple-hook",
  tsx: `"use client";

import useRipple from "use-ripple-hook";

export default function RippleExample() {
  const [rippleRef, rippleEvent] = useRipple({
    color: "rgba(255, 255, 255, 0.3)",
  });

  return (
    <div className="flex gap-4 p-8">
      <button
        ref={rippleRef}
        onPointerDown={rippleEvent}
        className="relative overflow-hidden px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium"
      >
        Click me
      </button>
    </div>
  );
}`,
};
