"use client";

import { useState, useMemo, useDeferredValue, useEffect, useCallback } from "react";
import { animate } from "motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import NumberFlow from "@number-flow/react";
import { effects } from "@/effects/registry";
import { createSearch } from "@/lib/search";
import type { EffectDefinition } from "@/effects/types";
import SearchBar from "./ui/SearchBar";
import EffectCard from "./EffectCard";
import CompareView from "./CompareView";

type SortKey = "default" | "stars" | "downloads" | "size";

function parseSizeToKB(size?: string): number {
  if (!size) return Infinity;
  const match = size.match(/([\d.~]+)\s*(kB|KB|MB)/i);
  if (!match) return Infinity;
  const val = parseFloat(match[1].replace("~", ""));
  return match[2].toLowerCase() === "mb" ? val * 1000 : val;
}

function sortEffects(items: EffectDefinition[], sortKey: SortKey): EffectDefinition[] {
  if (sortKey === "default") return items;
  return [...items].sort((a, b) => {
    const am = a.packageMeta;
    const bm = b.packageMeta;
    switch (sortKey) {
      case "stars": return (bm?.githubStars ?? 0) - (am?.githubStars ?? 0);
      case "downloads": return (bm?.weeklyDownloads ?? 0) - (am?.weeklyDownloads ?? 0);
      case "size": return parseSizeToKB(am?.bundleSize) - parseSizeToKB(bm?.bundleSize);
      default: return 0;
    }
  });
}

const categoryMeta: Record<string, string> = {
  "3d": "🧊",
  background: "🌌",
  glow: "✨",
  gradient: "🎨",
  hover: "👆",
  interaction: "⚡",
  layout: "📐",
  orb: "🔮",
  particle: "💫",
  scroll: "📜",
  text: "✏️",
  transition: "🔄",
};

const categories = [...new Set(effects.map((e) => e.category))].sort();

export default function EffectGrid() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("default");
  const [viewMode, setViewMode] = useState<"grid" | "compare">("grid");
  const [gridRef] = useAutoAnimate({ duration: 300 });

  const deferredQuery = useDeferredValue(query);
  const fuse = useMemo(() => createSearch(effects), []);

  // Scroll to card on hash + dock bounce highlight
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      // Dock bounce after scroll settles
      setTimeout(() => {
        animate(
          el,
          { y: [0, -20, 0, -12, 0, -4, 0] },
          { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        );
      }, 600);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    let results = effects;
    if (deferredQuery.trim()) results = fuse.search(deferredQuery).map((r) => r.item);
    if (activeCategory) results = results.filter((e) => e.category === activeCategory);
    return sortEffects(results, sortKey);
  }, [deferredQuery, activeCategory, fuse, sortKey]);

  return (
    <div className="flex flex-col gap-6">
      {/* Tabs row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setViewMode("grid")}
            className={`text-[14px] font-semibold flex items-center gap-1.5 transition-colors ${
              viewMode === "grid" ? "text-fg" : "text-muted/50 hover:text-muted"
            }`}
          >
            <span>🔥</span> All Effects
          </button>
          <button
            onClick={() => setViewMode("compare")}
            className={`text-[14px] font-semibold flex items-center gap-1.5 transition-colors ${
              viewMode === "compare" ? "text-fg" : "text-muted/50 hover:text-muted"
            }`}
          >
            <span>⚖️</span> Compare
          </button>
          <span className="text-[14px] text-muted/50 font-mono tabular-nums">
            <NumberFlow value={filtered.length} /> libraries
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1">
          {(["default", "stars", "downloads", "size"] as SortKey[]).map((k) => (
            <button
              key={k}
              onClick={() => setSortKey(k)}
              className={`px-3 py-1.5 rounded-lg text-[13px] capitalize transition-colors ${
                sortKey === k
                  ? "font-semibold text-fg"
                  : "text-muted/50 hover:text-muted"
              }`}
            >
              {k === "default" ? "Popular" : k === "stars" ? "Stars" : k === "downloads" ? "Downloads" : "Size"}
            </button>
          ))}
        </div>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all border ${
            !activeCategory
              ? "bg-fg text-bg border-fg shadow-sm"
              : "bg-transparent text-muted border-border hover:border-fg/20 hover:text-fg"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all border capitalize flex items-center gap-1.5 ${
              activeCategory === cat
                ? "bg-fg text-bg border-fg shadow-sm"
                : "bg-transparent text-muted border-border hover:border-fg/20 hover:text-fg"
            }`}
          >
            <span className="text-[12px]">{categoryMeta[cat] || "•"}</span>
            {cat}
          </button>
        ))}
      </div>

      {/* Search */}
      <SearchBar value={query} onChange={setQuery} />

      {/* Grid or Compare view */}
      {filtered.length > 0 ? (
        viewMode === "compare" ? (
          <CompareView effects={filtered} />
        ) : (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((effect) => (
              <EffectCard key={effect.slug} effect={effect} />
            ))}
          </div>
        )
      ) : (
        <div className="flex items-center justify-center py-32">
          <p className="text-muted/30 text-sm">No effects found</p>
        </div>
      )}
    </div>
  );
}
