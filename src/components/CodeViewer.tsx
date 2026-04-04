"use client";

import { useState, useEffect } from "react";
import CopyButton from "./ui/CopyButton";

interface CodeViewerProps {
  code: {
    tsx: string;
    css?: string;
  };
}

export default function CodeViewer({ code }: CodeViewerProps) {
  const [activeTab, setActiveTab] = useState<"tsx" | "css">("tsx");
  const [highlightedCode, setHighlightedCode] = useState<Record<string, string>>({});

  useEffect(() => {
    async function highlight() {
      const { codeToHtml } = await import("shiki");
      const results: Record<string, string> = {};

      results.tsx = await codeToHtml(code.tsx, {
        lang: "tsx",
        theme: "github-dark",
      });

      if (code.css) {
        results.css = await codeToHtml(code.css, {
          lang: "css",
          theme: "github-dark",
        });
      }

      setHighlightedCode(results);
    }
    highlight();
  }, [code]);

  const tabs = [
    { key: "tsx" as const, label: "TSX" },
    ...(code.css ? [{ key: "css" as const, label: "CSS" }] : []),
  ];

  const currentCode = activeTab === "tsx" ? code.tsx : (code.css ?? "");

  return (
    <div className="rounded-xl border border-border overflow-hidden bg-[#0d1117]">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2 bg-surface">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-accent/20 text-accent"
                  : "text-muted hover:text-fg"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <CopyButton text={currentCode} />
      </div>

      {/* Code content */}
      <div className="overflow-x-auto p-4 text-sm max-h-[400px] overflow-y-auto">
        {highlightedCode[activeTab] ? (
          <div
            dangerouslySetInnerHTML={{ __html: highlightedCode[activeTab] }}
            className="[&_pre]:!bg-transparent [&_code]:text-sm"
          />
        ) : (
          <pre className="text-muted/60 font-mono text-sm">
            <code>{currentCode}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
