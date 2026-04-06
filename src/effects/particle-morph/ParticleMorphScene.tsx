"use client";

import { useEffect, useRef, useId } from "react";
import "particle-morph";

const SHAPES = [
  { label: "MORPH", color: "#a855f7", fontSize: "48px" },
  { label: "REACT", color: "#22d3ee", fontSize: "48px" },
  { label: "WEBGL", color: "#f472b6", fontSize: "48px" },
  { label: "PIXEL", color: "#818cf8", fontSize: "48px" },
];

export default function ParticleMorphScene() {
  const containerId = useId().replace(/:/g, "-");
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const p = (globalThis as any).particles;
    if (!p || !containerRef.current) return;

    try {
      p.init(containerId, {
        particleCount: 20000,
        backgroundParticleCount: 200,
        mouseInteractionType: "push",
        mouseInteractionFieldDistance: 8000,
        mouseInteractionFieldIntensity: 5,
        edgeInteractionType: "teleport",
        prtclDstRng: 0.3,
      });
      p.start();
    } catch {
      return;
    }

    if (!p.ready) return;

    let shapeIndex = 0;

    const showShape = (index: number) => {
      const shape = SHAPES[index];
      p.addInputGroup({
        group: 0,
        xPos: "50%",
        yPos: "50%",
        inputs: [
          {
            text: shape.label,
            color: shape.color,
            align: "center",
            fontSize: shape.fontSize,
            fontWeight: "bold",
          },
        ],
        allocatedParticles: 8000,
        radius: 2,
        resPerc: 80,
        prtclDstRng: 0.2,
        removeWhite: true,
        enabled: true,
      });
    };

    showShape(0);

    const interval = setInterval(() => {
      shapeIndex = (shapeIndex + 1) % SHAPES.length;
      showShape(shapeIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
      try {
        p.deleteAllGroups();
      } catch {
        // ignore cleanup errors
      }
    };
  }, [containerId]);

  return (
    <div
      id={containerId}
      ref={containerRef}
      className="w-full h-full"
      style={{ position: "relative" }}
    />
  );
}
