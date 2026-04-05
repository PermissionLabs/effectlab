"use client";

import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  Sticky,
  MoveOut,
  MoveIn,
  FadeIn,
  ZoomIn,
} from "react-scroll-motion";

export default function ReactScrollMotionInner() {
  return (
    <div className="w-full h-full bg-[#050510] rounded-2xl overflow-hidden">
      <div className="relative w-full h-full overflow-y-auto">
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <div className="flex flex-col items-center gap-3">
                <span className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Scroll Down
                </span>
                <span className="text-white/40 text-sm">Watch the magic happen</span>
                <div className="mt-4 w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
                  <div className="w-1.5 h-2.5 rounded-full bg-white/40 animate-bounce" />
                </div>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(FadeIn(), MoveIn(-200, 0))}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-3xl">
                  <span role="img" aria-label="sparkle">&#x2728;</span>
                </div>
                <span className="text-2xl font-semibold text-white mt-3">
                  Fade + Slide In
                </span>
                <span className="text-white/40 text-sm">From the left</span>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(FadeIn(), ZoomIn())}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-3xl">
                  <span role="img" aria-label="rocket">&#x1F680;</span>
                </div>
                <span className="text-2xl font-semibold text-white mt-3">
                  Zoom In
                </span>
                <span className="text-white/40 text-sm">With fade effect</span>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <div className="text-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  The End
                </span>
                <p className="text-white/30 text-sm mt-2">Scroll back up to replay</p>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </div>
  );
}
