"use client";

import { Tooltip } from "react-tooltip";

const items = [
  { id: "t-info", label: "Info", tip: "Helpful information tooltip", color: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
  { id: "t-success", label: "Success", tip: "Action completed!", color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" },
  { id: "t-warning", label: "Warning", tip: "Proceed with caution", color: "bg-amber-500/15 text-amber-400 border-amber-500/20" },
  { id: "t-error", label: "Error", tip: "Something went wrong", color: "bg-red-500/15 text-red-400 border-red-500/20" },
];

export default function ReactTooltipInner() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full h-full bg-[#050510] rounded-2xl p-6">
      <p className="text-white/40 text-xs uppercase tracking-widest">Hover each button</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {items.map((item) => (
          <button
            key={item.id}
            data-tooltip-id={item.id}
            data-tooltip-content={item.tip}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all border active:scale-95 ${item.color}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item) => (
        <Tooltip
          key={item.id}
          id={item.id}
          place="top"
          style={{ backgroundColor: "#1e1e2e", color: "#fff", borderRadius: "8px", fontSize: "13px" }}
        />
      ))}
    </div>
  );
}
