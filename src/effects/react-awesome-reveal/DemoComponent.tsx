"use client";

import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";

const cards = [
  { title: "Fade In", desc: "Smooth opacity transition", color: "#3b82f6", Component: Fade },
  { title: "Slide Up", desc: "Slides from below", color: "#8b5cf6", Component: Slide },
  { title: "Zoom In", desc: "Scales into view", color: "#ec4899", Component: Zoom },
  { title: "Bounce", desc: "Playful bounce entry", color: "#10b981", Component: Bounce },
];

export default function ReactAwesomeRevealDemo() {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-center gap-4 p-6">
      <p className="text-white/60 text-xs uppercase tracking-widest mb-2">
        Scroll or watch the staggered reveals
      </p>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {cards.map(({ title, desc, color, Component }, i) => (
          <Component key={title} delay={i * 200} triggerOnce>
            <div
              className="rounded-xl p-5 flex flex-col gap-2 border border-white/10 backdrop-blur-sm"
              style={{ backgroundColor: `${color}15` }}
            >
              <div
                className="w-8 h-8 rounded-lg"
                style={{ backgroundColor: color }}
              />
              <h3 className="text-white font-semibold text-sm">{title}</h3>
              <p className="text-white/50 text-xs">{desc}</p>
            </div>
          </Component>
        ))}
      </div>
    </div>
  );
}
