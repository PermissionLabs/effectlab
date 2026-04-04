export const usage = {
  install: "bun add pixi.js",
  tsx: `"use client";
import { useEffect, useRef } from "react";

export default function GlowParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let app: any;
    async function init() {
      const PIXI = await import("pixi.js");
      if (!containerRef.current) return;

      app = new PIXI.Application();
      await app.init({
        resizeTo: containerRef.current,
        backgroundAlpha: 0,
        antialias: true,
      });
      containerRef.current.appendChild(app.canvas);

      const COLORS = [0x8b5cf6, 0xec4899, 0x3b82f6];
      for (let i = 0; i < 40; i++) {
        const gfx = new PIXI.Graphics();
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const r = 2 + Math.random() * 6;

        gfx.circle(0, 0, r * 4).fill({ color, alpha: 0.15 });
        gfx.circle(0, 0, r).fill({ color, alpha: 0.8 });
        gfx.x = Math.random() * app.screen.width;
        gfx.y = Math.random() * app.screen.height;
        app.stage.addChild(gfx);
      }
    }
    init();
    return () => app?.destroy(true);
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}`,
};
