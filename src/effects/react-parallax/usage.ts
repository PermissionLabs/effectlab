export const usage = {
  install: "bun add react-parallax",
  tsx: `"use client";

import { Parallax } from "react-parallax";

export default function HeroParallax() {
  return (
    <Parallax
      bgImage="/hero-background.jpg"
      strength={400}
      blur={{ min: -1, max: 3 }}
    >
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">
          Your Hero Content
        </h1>
      </div>
    </Parallax>
  );
}`,
};
