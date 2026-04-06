"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function TsparticlesReactDemo() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: { value: 80, density: { enable: true } },
        color: { value: ["#c084fc", "#22d3ee", "#818cf8", "#f472b6"] },
        shape: {
          type: ["circle", "triangle"],
        },
        opacity: {
          value: { min: 0.1, max: 0.6 },
          animation: { enable: true, speed: 0.8, minimumValue: 0.1, sync: false },
        },
        size: {
          value: { min: 4, max: 10 },
          animation: { enable: true, speed: 0.8, minimumValue: 2, sync: false },
        },
        links: {
          enable: true,
          color: { value: "#a855f7" },
          distance: 120,
          opacity: 0.15,
          width: 1,
          triangles: { enable: true, color: "#a855f710", opacity: 0.04 },
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none" as const,
          outModes: { default: "bounce" as const },
          attract: { enable: false },
        },
        shadow: {
          enable: true,
          color: "#c084fc",
          blur: 12,
          offset: { x: 0, y: 0 },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.03,
            opacity: 0.9,
            color: { value: ["#fff", "#22d3ee", "#f472b6"] },
          },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 180, links: { opacity: 0.3, color: "#22d3ee" } },
          push: { quantity: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!ready) return null;

  return (
    <div className="w-full h-full relative">
      <Particles id="tsparticles-demo" options={options} className="absolute inset-0" />
    </div>
  );
}
