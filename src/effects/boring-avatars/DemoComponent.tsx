"use client";

import { useState, useCallback } from "react";
import Avatar from "boring-avatars";

const variants = ["marble", "beam", "pixel", "sunset", "ring", "bauhaus"] as const;

const initialNames = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];

const palette = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];

function randomName() {
  const adjectives = ["Swift", "Bright", "Cool", "Dark", "Epic", "Fast", "Grand", "Hyper"];
  const nouns = ["Fox", "Lion", "Bear", "Wolf", "Hawk", "Deer", "Lynx", "Crow"];
  return (
    adjectives[Math.floor(Math.random() * adjectives.length)] +
    nouns[Math.floor(Math.random() * nouns.length)] +
    Math.floor(Math.random() * 100)
  );
}

export default function BoringAvatarsDemo() {
  const [names, setNames] = useState(initialNames);

  const shuffle = useCallback(() => {
    setNames(variants.map(() => randomName()));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-5">
      <p className="text-white/60 text-xs uppercase tracking-widest">
        6 avatar variants
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {variants.map((variant, i) => (
          <div key={variant} className="flex flex-col items-center gap-2">
            <Avatar
              size={56}
              name={names[i]}
              variant={variant}
              colors={palette}
            />
            <span className="text-white/50 text-[11px] font-mono">{variant}</span>
          </div>
        ))}
      </div>
      <button
        onClick={shuffle}
        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors active:scale-95"
      >
        Shuffle Names
      </button>
    </div>
  );
}
