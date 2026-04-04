export const usage = {
  install: "bun add react-scroll-parallax",
  tsx: `"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function ScrollParallax() {
  return (
    <ParallaxProvider>
      <div className="relative h-96 overflow-y-auto rounded-xl bg-slate-900">
        <div className="h-[800px] relative">
          <Parallax speed={-10} className="absolute inset-x-0 top-24">
            <div className="mx-auto w-32 h-32 rounded-full bg-blue-500/30" />
          </Parallax>

          <Parallax speed={0} className="absolute inset-x-0 top-48">
            <p className="text-center text-white text-2xl font-bold">
              Scroll Parallax
            </p>
          </Parallax>

          <Parallax speed={10} className="absolute inset-x-0 top-72">
            <div className="mx-auto w-24 h-24 rounded-lg bg-emerald-500/40" />
          </Parallax>

          <Parallax speed={20} className="absolute inset-x-0 top-96">
            <div className="mx-auto w-16 h-16 rounded-md bg-amber-500/50" />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
}`,
};
