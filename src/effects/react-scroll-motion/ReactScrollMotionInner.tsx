"use client";

import { useState } from "react";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  Sticky,
  MoveIn,
  FadeIn,
  ZoomIn,
} from "react-scroll-motion";

export default function ReactScrollMotionInner() {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div
      className="w-full h-full bg-[#050510] rounded-2xl overflow-y-auto"
      onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 10)}
    >
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <div className="flex flex-col items-center gap-2 text-center px-4">
              <span className="text-2xl font-bold text-white">Scroll Animations</span>
              <span className="text-white/30 text-xs">Scroll inside this card</span>
              <svg className="mt-2 text-white/20 animate-bounce" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(FadeIn(), MoveIn(-100, 0))}>
            <div className="flex items-center gap-3 px-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-lg shrink-0">✨</div>
              <div>
                <p className="text-sm font-medium text-white">Fade + Slide</p>
                <p className="text-xs text-white/30">Enters from the left</p>
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(FadeIn(), ZoomIn())}>
            <div className="flex items-center gap-3 px-6">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center text-lg shrink-0">🚀</div>
              <div>
                <p className="text-sm font-medium text-white">Zoom In</p>
                <p className="text-xs text-white/30">Scales up with fade</p>
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <p className="text-sm text-white/20 text-center">End — scroll up to replay</p>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}
