export const usage = {
  install: "bun add @tsparticles/react @tsparticles/slim @tsparticles/engine",
  tsx: `"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine((e) => loadSlim(e)).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="particles"
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 50 },
          color: { value: "#a855f7" },
          links: { enable: true, color: "#a855f7", opacity: 0.3 },
          move: { enable: true, speed: 1 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
      className="absolute inset-0"
    />
  );
}`,
};
