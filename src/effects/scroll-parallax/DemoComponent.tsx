"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function ScrollParallaxDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <ParallaxProvider>
        <div className="relative w-full max-w-md h-80 overflow-y-auto rounded-xl bg-slate-900/80 border border-white/10">
          <div className="h-[900px] relative">
            {/* Slow — background layer */}
            <Parallax speed={-10} className="absolute inset-x-0 top-20">
              <div className="mx-auto w-40 h-40 rounded-full bg-blue-500/20 blur-sm" />
            </Parallax>

            {/* Static — midground text */}
            <Parallax speed={0} className="absolute inset-x-0 top-36">
              <p className="text-center text-white text-xl font-bold select-none">
                Parallax Layers
              </p>
            </Parallax>

            {/* Medium — midground shape */}
            <Parallax speed={10} className="absolute inset-x-0 top-60">
              <div className="mx-auto w-28 h-28 rounded-lg bg-emerald-500/30 flex items-center justify-center">
                <span className="text-white/70 text-xs font-medium">
                  speed: 10
                </span>
              </div>
            </Parallax>

            {/* Fast — foreground shape */}
            <Parallax speed={20} className="absolute inset-x-0 top-[340px]">
              <div className="mx-auto w-20 h-20 rounded-md bg-amber-500/40 flex items-center justify-center">
                <span className="text-white/70 text-xs font-medium">
                  speed: 20
                </span>
              </div>
            </Parallax>

            {/* Extra layer for more depth */}
            <Parallax speed={-5} className="absolute inset-x-0 top-[460px]">
              <div className="mx-auto w-36 h-12 rounded-full bg-rose-500/25 flex items-center justify-center">
                <span className="text-white/60 text-xs">speed: -5</span>
              </div>
            </Parallax>

            <Parallax speed={15} className="absolute inset-x-0 top-[560px]">
              <div className="mx-auto w-24 h-24 rounded-full bg-violet-500/30 flex items-center justify-center">
                <span className="text-white/60 text-xs">speed: 15</span>
              </div>
            </Parallax>
          </div>
        </div>
      </ParallaxProvider>

      <p className="text-xs text-white/40">Scroll inside to see parallax</p>
    </div>
  );
}
