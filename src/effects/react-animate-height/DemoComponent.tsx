"use client";

import { useState } from "react";
import AnimateHeight from "react-animate-height";

const sections = [
  { title: "What is EffectLab?", content: "A curated showcase of visual effects for React. Browse, preview, and copy production-ready effects from real libraries." },
  { title: "How does it work?", content: "Each effect comes from an actual npm package. We provide live previews, install commands, usage code, and package metadata like bundle size and GitHub stars." },
  { title: "Can AI use it?", content: "Yes! EffectLab serves machine-readable endpoints at /llms.txt and /llms-full.txt. AI assistants can search and recommend effects." },
];

export default function ReactAnimateHeightDemo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col w-full h-full bg-[#050510] rounded-2xl p-5 gap-2 overflow-auto">
      {sections.map((section, i) => (
        <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition-colors"
          >
            {section.title}
            <span
              className="text-white/40 transition-transform duration-300"
              style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              ▼
            </span>
          </button>
          <AnimateHeight duration={300} height={openIndex === i ? "auto" : 0}>
            <div className="px-4 pb-4 text-xs text-white/60 leading-relaxed">
              {section.content}
            </div>
          </AnimateHeight>
        </div>
      ))}
    </div>
  );
}
