"use client";

import { useState, useMemo, useDeferredValue, useEffect } from "react";
import { animate } from "motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useTranslations } from "next-intl";
import NumberFlow from "@number-flow/react";
import { effects, allMotionTags } from "@/effects/registry";
import { createSearch } from "@/lib/search";
import type { EffectDefinition } from "@/effects/types";
import SearchBar from "./ui/SearchBar";
import FilterBar from "./ui/FilterBar";
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
  const t = useTranslations("grid");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeMotionTags, setActiveMotionTags] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("default");
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

  const toggleMotionTag = (tag: string) => {
    setActiveMotionTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = useMemo(() => {
    let results = effects;
    if (deferredQuery.trim()) results = fuse.search(deferredQuery).map((r) => r.item);
    if (activeCategory) results = results.filter((e) => e.category === activeCategory);
    if (activeMotionTags.length > 0)
      results = results.filter((e) =>
        activeMotionTags.some((t) => e.motionTags.includes(t as any))
      );
    return sortEffects(results, sortKey);
  }, [deferredQuery, activeCategory, activeMotionTags, fuse, sortKey]);

  return (
    <div className="flex flex-col gap-6">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[14px] text-muted/50 font-mono tabular-nums">
          <NumberFlow value={filtered.length} /> {t("libraries")}
        </span>
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
              {t(k === "default" ? "popular" : k)}
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
          {t("all")}
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

      {/* Motion tags */}
      <FilterBar
        tags={allMotionTags}
        activeTags={activeMotionTags}
        onToggle={toggleMotionTag}
        onClear={() => setActiveMotionTags([])}
      />

      {/* Search */}
      <SearchBar value={query} onChange={setQuery} />

      {/* Grid */}
      {filtered.length > 0 ? (
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((effect) => (
            <EffectCard key={effect.slug} effect={effect} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-32">
          <p className="text-muted/30 text-sm">{t("noResults")}</p>
        </div>
      )}
    </div>
  );
}
