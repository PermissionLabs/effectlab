"use client";

import { LinearTextGradient } from "react-text-gradients-and-animations";

export default function HeroTitleInner() {
  return (
    <h1 className="text-3xl font-bold tracking-tight">
      <LinearTextGradient
        angle={90}
        colors={["#a78bfa", "#ec4899", "#f59e0b", "#10b981", "#818cf8", "#a78bfa"]}
        animate
        animateDuration={5}
        animateDirection="horizontal"
      >
        Visual Effects Showcase
      </LinearTextGradient>
    </h1>
  );
}
