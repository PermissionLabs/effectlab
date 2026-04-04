"use client";

import dynamic from "next/dynamic";

const ShaderGradientCanvas = dynamic(
  () =>
    import("@shadergradient/react").then((mod) => mod.ShaderGradientCanvas),
  { ssr: false },
);

const ShaderGradient = dynamic(
  () => import("@shadergradient/react").then((mod) => mod.ShaderGradient),
  { ssr: false },
);

export default function ShaderGradientDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <div className="relative w-full max-w-md h-64 rounded-xl overflow-hidden border border-white/10">
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
      <p className="text-sm text-white/50">3D Shader Gradient (waterPlane)</p>
    </div>
  );
}
