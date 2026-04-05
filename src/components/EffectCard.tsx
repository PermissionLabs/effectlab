"use client";

import { useState, useRef, useCallback } from "react";
import type { EffectDefinition } from "@/effects/types";
import CodeViewer from "./CodeViewer";
import { copyToClipboard } from "@/lib/utils";

function buildAIPrompt(effect: EffectDefinition): string {
  const meta = effect.packageMeta;
  return `Apply this visual effect to my project:

**${effect.name}**
- Library: ${effect.library.packageName}${meta?.bundleSize ? ` (${meta.bundleSize})` : ""}
- Description: ${effect.description}
- Install: ${effect.usage.install}

Usage:
\`\`\`tsx
${effect.usage.tsx}
\`\`\`
${effect.usage.css ? `\nCSS:\n\`\`\`css\n${effect.usage.css}\n\`\`\`\n` : ""}
Docs: ${effect.library.url}
Preview: https://permissionlabs.github.io/effectlab`;
}

export default function EffectCard({ effect }: { effect: EffectDefinition }) {
  const [showCode, setShowCode] = useState(false);
  const [copiedAI, setCopiedAI] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Component = effect.component;

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const stars = effect.packageMeta?.githubStars;
  const size = effect.packageMeta?.bundleSize;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden bg-[#0a0a0a] cursor-pointer"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.04), transparent 50%)`
            : "none",
        }}
      />

      {/* Preview — full bleed, no padding */}
      <div className="relative w-full aspect-[16/10] bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Component />
        </div>

        {/* Hover overlay — info appears on hover */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0">
              <h3 className="text-[13px] font-medium text-white truncate">{effect.name}</h3>
              <p className="text-[11px] text-white/40 font-mono truncate mt-0.5">{effect.library.packageName}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {size && <span className="text-[10px] text-white/30 font-mono">{size}</span>}
              {stars != null && stars >= 1000 && (
                <span className="text-[10px] text-white/30 font-mono">{(stars / 1000).toFixed(1)}k</span>
              )}
            </div>
          </div>
        </div>

        {/* Hover action buttons — top right */}
        <div className="absolute top-2 right-2 z-30 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={async (e) => {
              e.stopPropagation();
              await copyToClipboard(buildAIPrompt(effect));
              setCopiedAI(true);
              setTimeout(() => setCopiedAI(false), 2000);
            }}
            className={`px-2 py-1 rounded text-[10px] font-mono backdrop-blur-md transition-all ${
              copiedAI
                ? "bg-emerald-500/20 text-emerald-300"
                : "bg-black/50 text-white/50 hover:text-white/80 border border-white/10"
            }`}
          >
            {copiedAI ? "copied" : "ai"}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setShowCode(!showCode); }}
            className={`px-2 py-1 rounded text-[10px] font-mono backdrop-blur-md transition-all ${
              showCode
                ? "bg-white/10 text-white/70 border border-white/20"
                : "bg-black/50 text-white/50 hover:text-white/80 border border-white/10"
            }`}
          >
            code
          </button>
          <a
            href={effect.library.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-2 py-1 rounded text-[10px] font-mono bg-black/50 text-white/50 hover:text-white/80 border border-white/10 backdrop-blur-md transition-all"
          >
            docs
          </a>
        </div>
      </div>

      {/* Code panel — below card, only when open */}
      {showCode && (
        <div className="border-t border-white/[0.06] p-3 flex flex-col gap-2 bg-[#050505]">
          <div className="px-2.5 py-1.5 rounded bg-black border border-white/[0.06] font-mono text-[11px] text-white/40">
            <span className="text-white/15 select-none">$ </span>{effect.usage.install}
          </div>
          <CodeViewer code={{ tsx: effect.usage.tsx, css: effect.usage.css }} />
        </div>
      )}
    </div>
  );
}
