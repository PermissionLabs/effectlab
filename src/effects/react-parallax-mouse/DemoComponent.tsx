"use client";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function ParallaxMouseDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <MouseParallaxContainer
        globalFactorX={0.3}
        globalFactorY={0.3}
        className="w-full h-full relative overflow-hidden"
      >
        {/* Deep background glow */}
        <MouseParallaxChild factorX={0.02} factorY={0.02} className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
        </MouseParallaxChild>

        {/* Mid background ring */}
        <MouseParallaxChild factorX={0.04} factorY={0.04} className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border-2 border-blue-500/20" />
        </MouseParallaxChild>

        {/* Floating shapes - slow */}
        <MouseParallaxChild factorX={0.06} factorY={0.06} className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            <div className="absolute top-[20%] left-[15%] w-8 h-8 rounded-lg bg-cyan-400/25 rotate-45" />
            <div className="absolute bottom-[25%] right-[20%] w-6 h-6 rounded-full bg-pink-400/25" />
          </div>
        </MouseParallaxChild>

        {/* Center content - medium */}
        <MouseParallaxChild factorX={0.08} factorY={0.08} className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-violet-500/40 to-fuchsia-500/40 border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <span className="text-white/70 text-2xl">✦</span>
            </div>
            <p className="mt-3 text-white/50 text-xs font-medium">Move your cursor</p>
          </div>
        </MouseParallaxChild>

        {/* Fast foreground dots */}
        <MouseParallaxChild factorX={0.12} factorY={0.12} className="absolute inset-0">
          <div className="relative w-full h-full">
            <div className="absolute top-[30%] right-[25%] w-2 h-2 rounded-full bg-emerald-400/40" />
            <div className="absolute bottom-[35%] left-[30%] w-2 h-2 rounded-full bg-amber-400/40" />
            <div className="absolute top-[60%] left-[65%] w-1.5 h-1.5 rounded-full bg-sky-400/40" />
            <div className="absolute top-[45%] left-[20%] w-1.5 h-1.5 rounded-full bg-rose-400/40" />
          </div>
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  );
}
