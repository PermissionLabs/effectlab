"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

const gradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
];

const slides = gradients.map((g, i) => ({
  src: `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${["#667eea", "#f093fb", "#4facfe", "#43e97b"][i]}"/>
        <stop offset="100%" style="stop-color:${["#764ba2", "#f5576c", "#00f2fe", "#38f9d7"][i]}"/>
      </linearGradient></defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <text x="400" y="310" text-anchor="middle" fill="white" font-size="48" font-family="system-ui" font-weight="bold">Slide ${i + 1}</text>
    </svg>`
  )}`,
}));

export default function LightboxInner() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <p className="text-white/40 text-xs uppercase tracking-widest">
        Click any thumbnail to open lightbox
      </p>
      <div className="grid grid-cols-4 gap-3">
        {gradients.map((g, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="w-20 h-20 rounded-xl cursor-pointer transition-transform hover:scale-105 active:scale-95 border border-white/10 overflow-hidden"
            style={{ background: g }}
          >
            <span className="text-white/80 text-sm font-bold">{i + 1}</span>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  );
}
