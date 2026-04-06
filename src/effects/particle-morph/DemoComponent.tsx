"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./ParticleMorphScene"), { ssr: false });

export default function ParticleMorphDemo() {
  return (
    <div className="w-full h-full">
      <Scene />
    </div>
  );
}
