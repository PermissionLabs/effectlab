export const usage = {
  install: "bun add react-scroll-motion",
  tsx: `"use client";

import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  Sticky,
  MoveOut,
  FadeIn,
  ZoomIn,
} from "react-scroll-motion";

export default function ScrollMotionExample() {
  return (
    <ScrollContainer>
      {/* Page 1: Sticky text that fades out and moves up */}
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <h1 className="text-5xl font-bold">Welcome</h1>
        </Animator>
      </ScrollPage>

      {/* Page 2: Fade and zoom in */}
      <ScrollPage>
        <Animator animation={batch(FadeIn(), ZoomIn())}>
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Scroll Magic</h2>
            <p className="mt-2 opacity-60">Elements animate as you scroll</p>
          </div>
        </Animator>
      </ScrollPage>

      {/* Page 3: Simple fade with sticky */}
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <h2 className="text-4xl font-bold">The End</h2>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}`,
};
