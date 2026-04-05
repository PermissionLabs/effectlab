"use client";

import { useState, useMemo } from "react";
import { effects } from "@/effects/registry";
import { createSearch } from "@/lib/search";
import type { EffectDefinition } from "@/effects/types";
import SearchBar from "./ui/SearchBar";
import EffectCard from "./EffectCard";

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

  const fuse = useMemo(() => createSearch(effects), []);

  const filtered = useMemo(() => {
    let results = effects;
    if (query.trim()) results = fuse.search(query).map((r) => r.item);
    if (activeCategory) results = results.filter((e) => e.category === activeCategory);
    return sortEffects(results, sortKey);
  }, [query, activeCategory, fuse, sortKey]);

  return (
    <div className="flex flex-col gap-6">
      {/* Tabs: Hot Picks / Latest style */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-white">All Effects</span>
          <span className="text-sm text-white/30">{filtered.length} libraries</span>
        </div>
        <div className="flex items-center gap-3 text-[12px] text-white/25">
          {(["default", "stars", "downloads", "size"] as SortKey[]).map((k) => (
            <button
              key={k}
              onClick={() => setSortKey(k)}
              className={`capitalize transition-colors ${sortKey === k ? "text-white/60" : "hover:text-white/40"}`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      {/* Category pills with emoji */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => setActiveCategory(null)}
          className={`shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all border ${
            !activeCategory
              ? "bg-white text-black border-white"
              : "bg-transparent text-white/40 border-white/10 hover:border-white/20 hover:text-white/60"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all border capitalize flex items-center gap-1.5 ${
              activeCategory === cat
                ? "bg-white text-black border-white"
                : "bg-transparent text-white/40 border-white/10 hover:border-white/20 hover:text-white/60"
            }`}
          >
            <span>{categoryMeta[cat] || "•"}</span>
            {cat}
          </button>
        ))}
      </div>

      {/* Search */}
      <SearchBar value={query} onChange={setQuery} />

      {/* Grid — 3 columns with comfortable gap */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((effect) => (
            <EffectCard key={effect.slug} effect={effect} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-32">
          <p className="text-white/15 text-sm">No effects found</p>
        </div>
      )}
    </div>
  );
}
