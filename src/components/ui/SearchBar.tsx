"use client";

import { useEffect, useRef } from "react";

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "/" && !e.metaKey && !e.ctrlKey) {
        const t = e.target as HTMLElement;
        if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") return;
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") { inputRef.current?.blur(); onChange(""); }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onChange]);

  return (
    <div className="relative w-full sm:w-56">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="search..."
        className="w-full pl-3 pr-8 py-1 rounded bg-transparent border border-white/[0.06] text-[12px] text-white/70 placeholder:text-white/15 focus:outline-none focus:border-white/[0.12] transition-colors font-mono"
      />
      {!value ? (
        <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-white/10 font-mono">/</kbd>
      ) : (
        <button onClick={() => onChange("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/40">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      )}
    </div>
  );
}
