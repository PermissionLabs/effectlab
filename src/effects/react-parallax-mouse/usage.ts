export const usage = {
  install: "bun add react-parallax-mouse",
  tsx: `"use client";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function MouseParallax() {
  return (
    <MouseParallaxContainer
      globalFactorX={0.3}
      globalFactorY={0.3}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background — moves slowly */}
      <MouseParallaxChild factorX={0.03} factorY={0.03} className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-purple-500/15 blur-3xl" />
      </MouseParallaxChild>

      {/* Foreground — moves faster */}
      <MouseParallaxChild factorX={0.1} factorY={0.1} className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Move your mouse</h1>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}`,
};
