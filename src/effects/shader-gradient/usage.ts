export const usage = {
  install: "bun add @shadergradient/react",
  tsx: `"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function ShaderGradientDemo() {
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden">
      <ShaderGradientCanvas>
        <ShaderGradient
          type="waterPlane"
          animate="on"
          uTime={0.2}
          uSpeed={0.4}
          uStrength={2}
          uDensity={1.2}
          uFrequency={5.5}
          color1="#ff5005"
          color2="#dbba95"
          color3="#d0bce1"
        />
      </ShaderGradientCanvas>
    </div>
  );
}`,
};
