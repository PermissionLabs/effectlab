"use client";

import { LightBeam } from "@stianlarsen/react-light-beam";

export default function LightBeamInner() {
  return (
    <div className="relative flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl overflow-hidden">
      <LightBeam
        colorLightmode="hsl(var(--primary))"
        colorDarkmode="hsl(210, 100%, 60%)"
        fullWidth={0.8}
      />
      <div className="relative z-10 text-center">
        <p className="text-white/80 text-lg font-medium mb-1">Light Beam</p>
        <p className="text-white/40 text-xs">Conic gradient background effect</p>
      </div>
    </div>
  );
}
