export const usage = {
  install: "bun add simplex-noise",
  tsx: `"use client";

import { useRef, useEffect } from "react";
import { createNoise2D } from "simplex-noise";

export default function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const noise2D = createNoise2D();
    let time = 0;
    const scale = 4;

    canvas.width = Math.floor(canvas.offsetWidth / scale);
    canvas.height = Math.floor(canvas.offsetHeight / scale);

    let animationId: number;

    function render() {
      const w = canvas!.width;
      const h = canvas!.height;
      const imageData = ctx!.createImageData(w, h);
      const data = imageData.data;

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const value = noise2D(x * 0.02 + time, y * 0.02 + time);
          const brightness = Math.floor(((value + 1) / 2) * 40 + 5);
          const idx = (y * w + x) * 4;
          data[idx] = brightness;
          data[idx + 1] = brightness;
          data[idx + 2] = brightness + 8;
          data[idx + 3] = 255;
        }
      }

      ctx!.putImageData(imageData, 0, 0);
      time += 0.003;
      animationId = requestAnimationFrame(render);
    }

    render();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: "pixelated" }}
    />
  );
}`,
};
