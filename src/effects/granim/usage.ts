export const usage = {
  install: "bun add granim",
  tsx: `"use client";

import { useRef, useEffect } from "react";
import Granim from "granim";

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const granimInstance = new Granim({
      element: canvasRef.current,
      direction: "diagonal",
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ["#833ab4", "#fd1d1d"],
            ["#fcb045", "#fd1d1d"],
            ["#833ab4", "#fcb045"],
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
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "400px", display: "block" }}
    />
  );
}`,
};
