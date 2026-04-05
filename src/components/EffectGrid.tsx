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
    <div className="flex flex-col">
      {/* Toolbar */}
      <div className="sticky top-14 z-40 bg-black/80 backdrop-blur-xl border-b border-white/[0.04] px-4 sm:px-6 py-3">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <SearchBar value={query} onChange={setQuery} />
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar flex-1">
            <button
              onClick={() => setActiveCategory(null)}
              className={`shrink-0 px-2 py-0.5 rounded text-[11px] transition-colors ${
                !activeCategory ? "text-white/70" : "text-white/20 hover:text-white/40"
              }`}
            >
              all
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`shrink-0 px-2 py-0.5 rounded text-[11px] transition-colors ${
                  activeCategory === cat ? "text-white/70" : "text-white/20 hover:text-white/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-white/20 font-mono shrink-0">
            {(["default", "stars", "downloads", "size"] as SortKey[]).map((k) => (
              <button
                key={k}
                onClick={() => setSortKey(k)}
                className={`transition-colors ${sortKey === k ? "text-white/50" : "hover:text-white/35"}`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="px-0">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 divide-x divide-y divide-white/[0.04]">
            {filtered.map((effect) => (
              <EffectCard key={effect.slug} effect={effect} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-32">
            <p className="text-white/15 text-sm font-mono">no results</p>
          </div>
        )}
      </div>
    </div>
  );
}
