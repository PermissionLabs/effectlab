"use client";

import { LinearTextGradient } from "react-text-gradients-and-animations";

export default function GradientInner() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6">
      <LinearTextGradient
        angle={90}
        colors={["#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"]}
        animate
        animateDuration={4}
        animateDirection="horizontal"
      >
        <span className="text-4xl font-bold tracking-tight">
          Flowing Gradient
        </span>
      </LinearTextGradient>
    </div>
  );
}
