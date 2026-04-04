"use client";

import SiriOrbComponent from "@/components/ui/smoothui/siri-orb";

export default function SiriOrbDemo() {
  return (
    <div className="relative flex items-center justify-center w-full h-full bg-[#050510]">
      <SiriOrbComponent
        size="140px"
        colors={{
          bg: "oklch(10% 0.02 264.695)",
          c1: "oklch(75% 0.15 350)",
          c2: "oklch(80% 0.12 200)",
          c3: "oklch(78% 0.14 280)",
        }}
        animationDuration={15}
      />
    </div>
  );
}
