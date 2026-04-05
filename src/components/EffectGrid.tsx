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
      {/* Tabs row — before.click style */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-[14px] font-semibold text-fg flex items-center gap-1.5">
            <span>🔥</span> All Effects
          </button>
          <span className="text-[14px] text-muted/50">{filtered.length} libraries</span>
        </div>
        {/* Sort tabs — right side */}
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

      {/* Category pills — before.click style with emoji */}
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

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((effect) => (
            <EffectCard key={effect.slug} effect={effect} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-32">
          <p className="text-muted/30 text-sm">No effects found</p>
        </div>
      )}
    </div>
  );
}
