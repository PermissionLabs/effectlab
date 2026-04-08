"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  tags: string[];
  activeTags: string[];
  onToggle: (tag: string) => void;
  onClear: () => void;
}

export default function FilterBar({ tags, activeTags, onToggle, onClear }: FilterBarProps) {
  const t = useTranslations("filter");

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={onClear}
        className={cn(
          "px-3 py-1.5 rounded-full text-[12px] font-medium transition-all border",
          activeTags.length === 0
            ? "bg-fg text-bg border-fg shadow-sm"
            : "bg-transparent text-muted border-border hover:border-fg/20 hover:text-fg"
        )}
      >
        {t("all")}
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onToggle(tag)}
          className={cn(
            "px-3 py-1.5 rounded-full text-[12px] font-medium transition-all border",
            activeTags.includes(tag)
              ? "bg-accent/15 text-accent border-accent/30"
              : "bg-transparent text-muted/60 border-border hover:border-fg/20 hover:text-fg"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
