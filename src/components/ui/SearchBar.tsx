"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const t = useTranslations("search");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") { inputRef.current?.blur(); onChange(""); }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onChange]);

  return (
    <div className="relative w-full max-w-lg">
      <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t("placeholder")}
        className="w-full pl-11 pr-16 py-3 rounded-xl bg-surface border border-border text-[14px] text-fg placeholder:text-muted/40 focus:outline-none focus:border-fg/20 focus:ring-2 focus:ring-fg/5 transition-all"
      />
      {!value ? (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
          <kbd className="px-1.5 py-0.5 text-[11px] text-muted/40 bg-surface-alt rounded border border-border font-mono">⌘</kbd>
          <kbd className="px-1.5 py-0.5 text-[11px] text-muted/40 bg-surface-alt rounded border border-border font-mono">K</kbd>
        </div>
      ) : (
        <button onClick={() => onChange("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted/40 hover:text-muted transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      )}
    </div>
  );
}
