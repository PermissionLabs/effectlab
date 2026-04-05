"use client";

import { useInView } from "react-intersection-observer";

const colors = [
  { bg: "bg-violet-500/20", border: "border-violet-500/30", text: "text-violet-400", activeBg: "bg-violet-500/40" },
  { bg: "bg-cyan-500/20", border: "border-cyan-500/30", text: "text-cyan-400", activeBg: "bg-cyan-500/40" },
  { bg: "bg-emerald-500/20", border: "border-emerald-500/30", text: "text-emerald-400", activeBg: "bg-emerald-500/40" },
  { bg: "bg-amber-500/20", border: "border-amber-500/30", text: "text-amber-400", activeBg: "bg-amber-500/40" },
  { bg: "bg-rose-500/20", border: "border-rose-500/30", text: "text-rose-400", activeBg: "bg-rose-500/40" },
  { bg: "bg-blue-500/20", border: "border-blue-500/30", text: "text-blue-400", activeBg: "bg-blue-500/40" },
];

function ObservedBox({ index, color }: { index: number; color: typeof colors[0] }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center w-full h-24 rounded-xl border transition-all duration-500 ${
        inView
          ? `${color.activeBg} ${color.border} scale-100 opacity-100`
          : `${color.bg} ${color.border} scale-90 opacity-40`
      }`}
    >
      <div className="text-center">
        <p className={`text-sm font-medium ${color.text}`}>
          Box {index + 1}
        </p>
        <p className="text-white/40 text-xs mt-1">
          {inView ? "In View" : "Out of View"}
        </p>
      </div>
    </div>
  );
}

export default function ReactIntersectionObserverInner() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <p className="text-white/60 text-xs uppercase tracking-widest shrink-0">
        Scroll to reveal boxes
      </p>
      <div className="w-full max-w-sm flex-1 overflow-y-auto space-y-4 pr-2">
        {/* Spacer */}
        <div className="h-8" />
        {colors.map((color, i) => (
          <ObservedBox key={i} index={i} color={color} />
        ))}
        {colors.map((color, i) => (
          <ObservedBox key={i + 6} index={i + 6} color={color} />
        ))}
        {/* Spacer */}
        <div className="h-8" />
      </div>
    </div>
  );
}
