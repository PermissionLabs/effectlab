export const usage = {
  install: "bun add react-intersection-observer",
  tsx: `"use client";

import { useInView } from "react-intersection-observer";

export default function InViewExample() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      style={{
        padding: "2rem",
        background: inView ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.05)",
        borderRadius: "1rem",
        transition: "all 0.5s ease",
        opacity: inView ? 1 : 0.3,
        transform: inView ? "scale(1)" : "scale(0.9)",
      }}
    >
      <p>{inView ? "In viewport!" : "Scroll to see me"}</p>
    </div>
  );
}`,
};
