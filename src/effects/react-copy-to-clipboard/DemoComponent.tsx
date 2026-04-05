"use client";

import { useState, useCallback } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const snippets = [
  { label: "Install", code: "bun add react-copy-to-clipboard" },
  { label: "Import", code: 'import { CopyToClipboard } from "react-copy-to-clipboard";' },
  { label: "Config", code: "NEXT_PUBLIC_APP_URL=https://effectlab.dev" },
];

export default function ReactCopyToClipboardDemo() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = useCallback((index: number) => {
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-3">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
        Click to copy
      </p>
      {snippets.map((snippet, i) => (
        <div
          key={i}
          className="w-full max-w-md flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
        >
          <div className="flex-1 min-w-0">
            <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">
              {snippet.label}
            </p>
            <code className="text-white/80 text-xs font-mono block truncate">
              {snippet.code}
            </code>
          </div>
          <CopyToClipboard text={snippet.code} onCopy={() => handleCopy(i)}>
            <button
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                copiedIndex === i
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-white/10 hover:bg-white/20 text-white/70 border border-white/10"
              }`}
            >
              {copiedIndex === i ? (
                <span className="flex items-center gap-1">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </span>
              ) : (
                "Copy"
              )}
            </button>
          </CopyToClipboard>
        </div>
      ))}
    </div>
  );
}
