"use client";

import { useRef, useEffect } from "react";
import { createNoise2D } from "simplex-noise";

export default function SimplexNoiseInner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const noise2D = createNoise2D();
    let animationId: number;
    let time = 0;

    const scale = 4;

    function resize() {
      if (!canvas) return;
      canvas.width = Math.floor(canvas.offsetWidth / scale);
      canvas.height = Math.floor(canvas.offsetHeight / scale);
    }

    resize();
    window.addEventListener("resize", resize);

    function render() {
      if (!canvas || !ctx) return;
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const nx = x * 0.02;
          const ny = y * 0.02;
          const value = noise2D(nx + time, ny + time);
          const brightness = Math.floor(((value + 1) / 2) * 40 + 5);
          const idx = (y * w + x) * 4;
          data[idx] = brightness;
          data[idx + 1] = brightness;
          data[idx + 2] = brightness + 8;
          data[idx + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      time += 0.003;
      animationId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ imageRendering: "pixelated" }}
      />
      <div className="relative z-10 text-center">
        <p className="text-white/90 text-xl font-semibold tracking-wide">
          Simplex Noise
        </p>
        <p className="text-white/40 text-sm mt-1">
          Animated grain texture overlay
        </p>
      </div>
    </div>
  );
}
