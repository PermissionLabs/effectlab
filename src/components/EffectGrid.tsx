"use client";

import { useState, useMemo } from "react";
import { effects, allTags } from "@/effects/registry";
import { createSearch } from "@/lib/search";
import type { EffectDefinition } from "@/effects/types";
import SearchBar from "./ui/SearchBar";
import FilterBar from "./ui/FilterBar";
import EffectCard from "./EffectCard";

type SortKey = "default" | "stars" | "downloads" | "size" | "updated";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "default", label: "Default" },
  { key: "stars", label: "Stars" },
  { key: "downloads", label: "Downloads" },
  { key: "size", label: "Size" },
  { key: "updated", label: "Updated" },
];

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
      case "stars":
        return (bm?.githubStars ?? 0) - (am?.githubStars ?? 0);
      case "downloads":
        return (bm?.weeklyDownloads ?? 0) - (am?.weeklyDownloads ?? 0);
      case "size":
        return parseSizeToKB(am?.bundleSize) - parseSizeToKB(bm?.bundleSize);
      case "updated":
        return (bm?.lastUpdated ?? "").localeCompare(am?.lastUpdated ?? "");
      default:
        return 0;
    }
  });
}

export default function EffectGrid() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("default");

  const fuse = useMemo(() => createSearch(effects), []);

  const filtered = useMemo(() => {
    let results = effects;

    if (query.trim()) {
      results = fuse.search(query).map((r) => r.item);
    }

    if (activeTags.length > 0) {
      results = results.filter((e) =>
        activeTags.some((tag) => e.tags.includes(tag))
      );
    }

    return sortEffects(results, sortKey);
  }, [query, activeTags, fuse, sortKey]);

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Search + Filters */}
      <div className="flex flex-col gap-4">
        <SearchBar value={query} onChange={setQuery} />
        <FilterBar
          tags={allTags}
          activeTags={activeTags}
          onToggle={toggleTag}
          onClear={() => setActiveTags([])}
        />
      </div>

      {/* Results + Sort */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted">
          {filtered.length} effect{filtered.length !== 1 ? "s" : ""}
          {query && ` matching "${query}"`}
        </div>

        {/* Sort dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted">Sort by</span>
          <div className="flex gap-1">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSortKey(opt.key)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  sortKey === opt.key
                    ? "bg-accent/20 text-accent"
                    : "text-muted hover:text-fg"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((effect) => (
            <EffectCard key={effect.slug} effect={effect} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-muted mb-4 opacity-50">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <p className="text-muted text-sm">No effects found. Try a different search.</p>
        </div>
      )}
    </div>
  );
}
