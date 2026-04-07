export const usage = {
  install: "bun add motion",
  tsx: `"use client";

import { useAnimate } from "motion/react";

export function useDockBounce() {
  const [scope, animate] = useAnimate();

  const bounce = async () => {
    await animate(
      scope.current,
      { y: [0, -24, 0, -14, 0, -6, 0] },
      { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    );
  };

  return { scope, bounce };
}

// Usage:
// const { scope, bounce } = useDockBounce();
// <div ref={scope} onClick={bounce}>Bounce me</div>`,
};
