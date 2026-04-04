"use client";

import { cn } from "@/lib/utils";

interface FilterBarProps {
  tags: string[];
  activeTags: string[];
  onToggle: (tag: string) => void;
  onClear: () => void;
}

export default function FilterBar({ tags, activeTags, onToggle, onClear }: FilterBarProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
      <button
        onClick={onClear}
        className={cn(
          "shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
          activeTags.length === 0
            ? "bg-accent text-white"
            : "bg-surface border border-border text-muted hover:text-fg"
        )}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onToggle(tag)}
          className={cn(
            "shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-all capitalize",
            activeTags.includes(tag)
              ? "bg-accent/20 text-accent border border-accent/30"
              : "bg-surface border border-border text-muted hover:text-fg hover:border-border"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
