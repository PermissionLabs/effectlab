"use client";

import { useState } from "react";

const PRESETS = {
  defaultRainbow: {
    name: "Default Rainbow",
    borderColors: ["#eeff00", "#4fff00", "#2e5aff", "#fe00ff", "#e71717"],
    glowColors: ["#cdc923", "#00ff4f", "#0077ff", "#ef00ff", "#de1c1c"],
  },
  oceanSunset: {
    name: "Ocean Sunset",
    borderColors: ["#ff7cab", "#3f64c7", "#f0732e"],
    glowColors: ["#f82fc6", "#5a4ff9", "#ff923e"],
  },
};

type PresetKey = keyof typeof PRESETS;

export default function RNAnimatedGlow() {
  const [active, setActive] = useState<PresetKey>("defaultRainbow");
  const preset = PRESETS[active];

  const borderGradient = `conic-gradient(from var(--glow-angle, 0deg), ${preset.borderColors.join(", ")}, ${preset.borderColors[0]})`;
  const glowGradient = `conic-gradient(from var(--glow-angle, 0deg), ${preset.glowColors.join(", ")}, ${preset.glowColors[0]})`;

  return (
    <div className="relative flex flex-col items-center justify-center gap-4 w-full h-full overflow-hidden">
      <div className="relative w-[70%] max-w-[300px] aspect-[2/1]">
        {/* Outer glow — soft spread */}
        <div
          className="absolute -inset-6 rounded-[40px]"
          style={{ background: glowGradient, animation: "glow-rotate 4s linear infinite", filter: "blur(30px)", opacity: 0.3 }}
        />
        {/* Medium glow */}
        <div
          className="absolute -inset-2 rounded-[34px]"
          style={{ background: glowGradient, animation: "glow-rotate 4s linear infinite", filter: "blur(10px)", opacity: 0.5 }}
        />
        {/* Sharp border */}
        <div
          className="absolute inset-0 rounded-[30px]"
          style={{ background: borderGradient, animation: "glow-rotate 4s linear infinite" }}
        />
        {/* Text overlay — no background box, just text floating on the glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-white drop-shadow-lg">{preset.name}</span>
        </div>
      </div>

      <div className="flex gap-2 z-10">
        {(Object.keys(PRESETS) as PresetKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
              active === key
                ? "bg-white/15 text-white border border-white/20"
                : "bg-white/5 text-white/40 border border-white/5 hover:text-white/60"
            }`}
          >
            {PRESETS[key].name}
          </button>
        ))}
      </div>
    </div>
  );
}
