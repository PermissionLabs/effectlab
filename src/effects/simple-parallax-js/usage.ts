export const usage = {
  install: "bun add simple-parallax-js",
  tsx: `"use client";

import SimpleParallax from "simple-parallax-js";

export default function ParallaxImage() {
  return (
    <SimpleParallax scale={1.5} orientation="down" overflow>
      <img
        src="/your-image.jpg"
        alt="Parallax"
        className="w-full h-auto rounded-xl"
      />
    </SimpleParallax>
  );
}`,
};
