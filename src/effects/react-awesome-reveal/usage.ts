export const usage = {
  install: "bun add react-awesome-reveal",
  tsx: `"use client";

import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";

export default function RevealExample() {
  return (
    <div className="space-y-8 p-8">
      <Fade triggerOnce>
        <h1 className="text-4xl font-bold">Fade In</h1>
      </Fade>

      <Slide direction="left" triggerOnce>
        <p className="text-lg">This slides in from the left.</p>
      </Slide>

      <Zoom delay={200} triggerOnce>
        <div className="p-6 bg-blue-500 rounded-xl text-white">
          Zoomed in with delay
        </div>
      </Zoom>

      <Bounce cascade damping={0.1}>
        <p>B</p>
        <p>O</p>
        <p>U</p>
        <p>N</p>
        <p>C</p>
        <p>E</p>
      </Bounce>
    </div>
  );
}`,
};
