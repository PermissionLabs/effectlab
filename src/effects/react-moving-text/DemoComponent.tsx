"use client";

import MovingText from "react-moving-text";

const animations = [
  { type: "bounce", text: "Bounce", delay: "0s" },
  { type: "fadeIn", text: "Fade In", delay: "0.2s" },
  { type: "swing", text: "Swing", delay: "0.4s" },
  { type: "jelly", text: "Jelly", delay: "0.6s" },
  { type: "pulse", text: "Pulse", delay: "0.8s" },
  { type: "spin", text: "Spin", delay: "0s" },
  { type: "flash", text: "Flash", delay: "0.3s" },
  { type: "glowing", text: "Glow", delay: "0.5s" },
] as const;

export default function ReactMovingTextDemo() {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-3 p-5">
      {animations.map(({ type, text, delay }) => (
        <div key={type} className="flex items-center justify-center">
          <MovingText
            type={type}
            duration="1500ms"
            delay={delay}
            direction="alternate"
            timing="ease-in-out"
            iteration="infinite"
            fillMode="both"
          >
            <span className="text-white text-sm font-medium tracking-wide">
              {text}
            </span>
          </MovingText>
        </div>
      ))}
    </div>
  );
}
