export const usage = {
  install: "bun add particle-morph",
  tsx: `import { useEffect, useRef } from "react";
import "particle-morph";

export default function ParticleDemo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const p = (globalThis as any).particles;
    if (!p) return;

    p.init("particle-box", {
      particleCount: 20000,
      backgroundParticleCount: 200,
      mouseInteractionType: "push",
    });
    p.start();

    if (p.ready) {
      p.addInputGroup({
        group: 0,
        xPos: "50%",
        yPos: "50%",
        inputs: [
          { text: "HELLO", color: "#a855f7", align: "center",
            fontSize: "64px", fontWeight: "bold" },
        ],
        allocatedParticles: 8000,
        radius: 2,
        enabled: true,
      });
    }

    return () => { try { p.deleteAllGroups(); } catch {} };
  }, []);

  return <div id="particle-box" ref={ref} style={{ width: "100%", height: 400 }} />;
}`,
};
