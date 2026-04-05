"use client";

import { useRef, useState, useEffect } from "react";

// react-scroll-motion is designed for full-page scroll.
// This demo simulates its effects inside a contained scroll area
// using a manual scroll-progress approach to show what the library does.

const sections = [
  { emoji: "✨", title: "Fade In", subtitle: "Element fades into view", color: "from-violet-500/20 to-indigo-500/20" },
  { emoji: "🚀", title: "Slide In", subtitle: "Slides from the left", color: "from-emerald-500/20 to-teal-500/20" },
  { emoji: "🎯", title: "Zoom In", subtitle: "Scales up on scroll", color: "from-rose-500/20 to-pink-500/20" },
  { emoji: "💫", title: "Sticky + Fade", subtitle: "Sticks then fades out", color: "from-amber-500/20 to-orange-500/20" },
];

export default function ReactScrollMotionInner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleItems((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            const idx = Number(entry.target.getAttribute("data-idx"));
            if (entry.isIntersecting) next.add(idx);
          });
          return next;
        });
      },
      { root: container, threshold: 0.3 }
    );

    container.querySelectorAll("[data-idx]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-[#050510] rounded-2xl overflow-y-auto p-4"
    >
      <div className="flex flex-col items-center py-4">
        <p className="text-[11px] text-white/30 uppercase tracking-widest mb-2">react-scroll-motion</p>
        <p className="text-xs text-white/20 mb-6">Scroll inside this card</p>
      </div>

      <div className="flex flex-col gap-4 pb-8">
        {sections.map((s, i) => (
          <div
            key={i}
            data-idx={i}
            className="transition-all duration-700 ease-out"
            style={{
              opacity: visibleItems.has(i) ? 1 : 0,
              transform: visibleItems.has(i) ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            }}
          >
            <div className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${s.color} border border-white/5`}>
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-lg shrink-0">
                {s.emoji}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{s.title}</p>
                <p className="text-xs text-white/30">{s.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pb-6">
        <p className="text-[10px] text-white/15">Scroll up to replay</p>
      </div>
    </div>
  );
}
