"use client";

import { useState, useMemo } from "react";
import { effects, allTags } from "@/effects/registry";
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
    <div className="flex flex-col gap-4">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <SearchBar value={query} onChange={setQuery} />
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveCategory(null)}
            className={`shrink-0 px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              !activeCategory ? "bg-white/[0.08] text-white/70" : "text-white/25 hover:text-white/40"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`shrink-0 px-2.5 py-1 rounded text-[11px] font-medium transition-colors capitalize ${
                activeCategory === cat ? "bg-white/[0.08] text-white/70" : "text-white/25 hover:text-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sort + count */}
      <div className="flex items-center justify-between text-[11px] text-white/25 font-mono">
        <span>{filtered.length} results</span>
        <div className="flex gap-2">
          {(["default", "stars", "downloads", "size"] as SortKey[]).map((k) => (
            <button
              key={k}
              onClick={() => setSortKey(k)}
              className={`transition-colors ${sortKey === k ? "text-white/50" : "hover:text-white/40"}`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filtered.map((effect) => (
            <EffectCard key={effect.slug} effect={effect} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-20">
          <p className="text-white/20 text-sm font-mono">no results</p>
        </div>
      )}
    </div>
  );
}
