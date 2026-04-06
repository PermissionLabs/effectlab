export const usage = {
  install: "bun add animejs",
  tsx: `import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export default function StaggerGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const dots = ref.current.querySelectorAll(".dot");
    animate(dots, {
      scale: [{ to: 0.2, duration: 400 }, { to: 1, duration: 600 }],
      opacity: [{ to: 1, duration: 400 }, { to: 0.3, duration: 600 }],
      delay: stagger(50, { grid: [10, 6], from: "center" }),
      loop: true,
      ease: "inOutQuad",
    });
  }, []);

  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: 6 }}>
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} className="dot" style={{ width: 12, height: 12, borderRadius: "50%", background: "#8b5cf6", opacity: 0.3 }} />
      ))}
    </div>
  );
}`,
};
