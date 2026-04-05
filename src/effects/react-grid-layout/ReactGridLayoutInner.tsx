"use client";

import { useState } from "react";
import { Responsive, useContainerWidth, type ResponsiveGridLayoutProps } from "react-grid-layout";

const cardData = [
  { i: "a", label: "Analytics", color: "from-violet-500/30 to-violet-600/10", border: "border-violet-500/30", text: "text-violet-400" },
  { i: "b", label: "Revenue", color: "from-emerald-500/30 to-emerald-600/10", border: "border-emerald-500/30", text: "text-emerald-400" },
  { i: "c", label: "Users", color: "from-amber-500/30 to-amber-600/10", border: "border-amber-500/30", text: "text-amber-400" },
  { i: "d", label: "Settings", color: "from-rose-500/30 to-rose-600/10", border: "border-rose-500/30", text: "text-rose-400" },
];

const initialLayouts: ResponsiveGridLayoutProps<"lg">["layouts"] = {
  lg: [
    { i: "a", x: 0, y: 0, w: 2, h: 2 },
    { i: "b", x: 2, y: 0, w: 2, h: 2 },
    { i: "c", x: 0, y: 2, w: 2, h: 2 },
    { i: "d", x: 2, y: 2, w: 2, h: 2 },
  ],
};

export default function ReactGridLayoutInner() {
  const [currentLayouts, setCurrentLayouts] = useState(initialLayouts);
  const { width, containerRef, mounted } = useContainerWidth({ initialWidth: 400 });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
        Drag & resize cards
      </p>
      <div className="w-full max-w-md" ref={containerRef}>
        {mounted && (
        <Responsive
          className="layout"
          width={width}
          layouts={currentLayouts}
          breakpoints={{ lg: 0 }}
          cols={{ lg: 4 }}
          rowHeight={60}
          onLayoutChange={(_layout, allLayouts) =>
            setCurrentLayouts(allLayouts)
          }
          dragConfig={{ handle: ".drag-handle" }}
        >
          {cardData.map((card) => (
            <div
              key={card.i}
              className={`bg-gradient-to-br ${card.color} border ${card.border} rounded-xl p-3 flex flex-col cursor-default`}
            >
              <div className="drag-handle cursor-grab active:cursor-grabbing flex items-center gap-2 mb-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  className="text-white/30"
                >
                  <circle cx="3" cy="3" r="1.5" />
                  <circle cx="9" cy="3" r="1.5" />
                  <circle cx="3" cy="9" r="1.5" />
                  <circle cx="9" cy="9" r="1.5" />
                </svg>
                <span className={`text-xs font-semibold ${card.text}`}>
                  {card.label}
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <span className="text-white/20 text-[10px]">
                  {card.i.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </Responsive>
        )}
      </div>
    </div>
  );
}
