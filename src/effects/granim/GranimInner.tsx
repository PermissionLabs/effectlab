"use client";

import { useRef, useEffect } from "react";
import Granim from "granim";

export default function GranimInner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const granimInstance = new Granim({
      element: canvasRef.current,
      direction: "diagonal",
      isPausedWhenNotInView: true,
      stateTransitionSpeed: 500,
      states: {
        "default-state": {
          gradients: [
            ["#833ab4", "#fd1d1d"],
            ["#fcb045", "#fd1d1d"],
            ["#833ab4", "#fcb045"],
            ["#0077ff", "#833ab4"],
            ["#00c6ff", "#0077ff"],
          ],
          transitionSpeed: 3000,
        },
      },
    });

    return () => {
      granimInstance.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <p
          style={{
            fontSize: "clamp(1.2rem, 4vw, 2rem)",
            fontWeight: 700,
            color: "rgba(255, 255, 255, 0.9)",
            letterSpacing: "0.1em",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            textTransform: "uppercase",
          }}
        >
          Granim
        </p>
        <p
          style={{
            fontSize: "clamp(0.65rem, 1.5vw, 0.85rem)",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.6)",
            letterSpacing: "0.15em",
            marginTop: "0.4rem",
            textShadow: "0 1px 10px rgba(0,0,0,0.5)",
          }}
        >
          Fluid gradient animation
        </p>
      </div>
    </div>
  );
}
