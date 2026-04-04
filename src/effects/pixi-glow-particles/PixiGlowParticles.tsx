"use client";

import { useEffect, useRef } from "react";

export default function PixiGlowParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<import("pixi.js").Application | null>(null);

  useEffect(() => {
    if (!containerRef.current || appRef.current) return;

    let destroyed = false;

    async function init() {
      const PIXI = await import("pixi.js");

      if (destroyed || !containerRef.current) return;

      const app = new PIXI.Application();
      await app.init({
        resizeTo: containerRef.current,
        backgroundAlpha: 0,
        antialias: true,
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
      });

      if (destroyed) {
        app.destroy(true);
        return;
      }

      containerRef.current.appendChild(app.canvas as HTMLCanvasElement);
      appRef.current = app;

      const particles: {
        gfx: import("pixi.js").Graphics;
        vx: number;
        vy: number;
        baseAlpha: number;
        pulseSpeed: number;
        phase: number;
        radius: number;
      }[] = [];

      const COLORS = [0x8b5cf6, 0xec4899, 0x3b82f6, 0x10b981, 0xf59e0b];
      const COUNT = 40;

      for (let i = 0; i < COUNT; i++) {
        const gfx = new PIXI.Graphics();
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const radius = 2 + Math.random() * 6;
        const glowRadius = radius * 4;

        // Glow layer
        gfx.circle(0, 0, glowRadius);
        gfx.fill({ color, alpha: 0.15 });

        // Core
        gfx.circle(0, 0, radius);
        gfx.fill({ color, alpha: 0.8 });

        gfx.x = Math.random() * app.screen.width;
        gfx.y = Math.random() * app.screen.height;

        app.stage.addChild(gfx);

        particles.push({
          gfx,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          baseAlpha: 0.5 + Math.random() * 0.5,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          phase: Math.random() * Math.PI * 2,
          radius,
        });
      }

      let frame = 0;
      app.ticker.add(() => {
        frame++;
        for (const p of particles) {
          p.gfx.x += p.vx;
          p.gfx.y += p.vy;

          // Wrap around
          if (p.gfx.x < -20) p.gfx.x = app.screen.width + 20;
          if (p.gfx.x > app.screen.width + 20) p.gfx.x = -20;
          if (p.gfx.y < -20) p.gfx.y = app.screen.height + 20;
          if (p.gfx.y > app.screen.height + 20) p.gfx.y = -20;

          // Pulse
          p.gfx.alpha =
            p.baseAlpha + Math.sin(frame * p.pulseSpeed + p.phase) * 0.3;
        }
      });
    }

    init();

    return () => {
      destroyed = true;
      if (appRef.current) {
        appRef.current.destroy(true);
        appRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-[#050510] rounded-2xl overflow-hidden"
    />
  );
}
