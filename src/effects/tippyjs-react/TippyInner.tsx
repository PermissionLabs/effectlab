"use client";

import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-away.css";
import "tippy.js/animations/scale.css";
import "tippy.js/animations/perspective.css";

const tooltips = [
  {
    label: "Shift Away",
    animation: "shift-away",
    content: "Smooth shift-away animation",
    color: "bg-violet-500/15 border-violet-500/25 text-violet-400 hover:bg-violet-500/25",
  },
  {
    label: "Scale",
    animation: "scale",
    content: "Elastic scale animation",
    color: "bg-emerald-500/15 border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/25",
  },
  {
    label: "Perspective",
    animation: "perspective",
    content: "3D perspective animation",
    color: "bg-amber-500/15 border-amber-500/25 text-amber-400 hover:bg-amber-500/25",
  },
];

export default function TippyInner() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-6">
      <p className="text-white/40 text-xs uppercase tracking-widest">
        Hover each button
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {tooltips.map((t) => (
          <Tippy
            key={t.animation}
            content={
              <span className="text-sm">{t.content}</span>
            }
            animation={t.animation}
            duration={[300, 200]}
            theme="custom-dark"
          >
            <button
              className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all active:scale-95 cursor-pointer ${t.color}`}
            >
              {t.label}
            </button>
          </Tippy>
        ))}
      </div>
    </div>
  );
}
