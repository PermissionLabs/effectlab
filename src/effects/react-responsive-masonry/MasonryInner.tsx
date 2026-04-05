"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const cards = [
  { height: 140, color: "from-violet-600/30 to-violet-800/20", label: "Design" },
  { height: 200, color: "from-emerald-600/30 to-emerald-800/20", label: "Develop" },
  { height: 120, color: "from-amber-600/30 to-amber-800/20", label: "Deploy" },
  { height: 180, color: "from-rose-600/30 to-rose-800/20", label: "Monitor" },
  { height: 160, color: "from-cyan-600/30 to-cyan-800/20", label: "Iterate" },
  { height: 220, color: "from-pink-600/30 to-pink-800/20", label: "Scale" },
  { height: 130, color: "from-indigo-600/30 to-indigo-800/20", label: "Test" },
  { height: 170, color: "from-teal-600/30 to-teal-800/20", label: "Ship" },
];

export default function MasonryInner() {
  return (
    <div className="w-full h-full bg-[#050510] rounded-2xl p-4 overflow-auto">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-4 text-center">
        Responsive Masonry Grid
      </p>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 0: 1, 200: 2, 400: 3 }}
      >
        <Masonry gutter="10px">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-xl bg-gradient-to-br ${card.color} border border-white/5 p-4 flex flex-col justify-between`}
              style={{ height: card.height }}
            >
              <span className="text-xs font-mono text-white/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white/80">
                  {card.label}
                </h3>
                <div className="mt-2 flex gap-1">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div
                      key={j}
                      className="h-1 rounded-full bg-white/10"
                      style={{ width: 20 + ((i + j) % 3) * 15 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
