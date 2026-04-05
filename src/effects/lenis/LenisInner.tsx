"use client";

import { ReactLenis } from "lenis/react";

const sections = [
  { color: "from-violet-600/20 to-indigo-600/20", label: "Section One", text: "Smooth inertia scrolling" },
  { color: "from-emerald-600/20 to-teal-600/20", label: "Section Two", text: "Natural deceleration" },
  { color: "from-rose-600/20 to-pink-600/20", label: "Section Three", text: "Buttery 60fps scroll" },
  { color: "from-amber-600/20 to-orange-600/20", label: "Section Four", text: "Momentum-based physics" },
  { color: "from-cyan-600/20 to-blue-600/20", label: "Section Five", text: "Touch & wheel support" },
];

export default function LenisInner() {
  return (
    <div className="w-full h-full bg-[#050510] rounded-2xl overflow-hidden">
      <ReactLenis
        root={false}
        options={{ duration: 1.2, smoothWheel: true, wheelMultiplier: 1 }}
        className="w-full h-full overflow-y-auto"
      >
        {/* Hero */}
        <div className="flex flex-col items-center justify-center h-64 px-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Lenis Smooth Scroll
          </h2>
          <p className="text-white/40 text-sm mt-2">Scroll down to feel the difference</p>
          <div className="mt-6 w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>

        {/* Content sections */}
        {sections.map((section, i) => (
          <div
            key={i}
            className={`mx-4 mb-4 p-8 rounded-xl bg-gradient-to-br ${section.color} border border-white/5`}
          >
            <span className="text-xs font-mono text-white/30 uppercase tracking-wider">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-semibold text-white mt-2">{section.label}</h3>
            <p className="text-white/50 text-sm mt-1">{section.text}</p>
            <div className="mt-4 flex gap-2">
              {Array.from({ length: 3 }).map((_, j) => (
                <div
                  key={j}
                  className="h-2 rounded-full bg-white/10"
                  style={{ width: `${60 + Math.random() * 80}px` }}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="flex items-center justify-center h-32">
          <p className="text-white/20 text-sm">End of scroll demo</p>
        </div>
      </ReactLenis>
    </div>
  );
}
