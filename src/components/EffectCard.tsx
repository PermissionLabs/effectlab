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

interface EffectCardProps {
  effect: EffectDefinition;
}

export default function EffectCard({ effect }: EffectCardProps) {
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
      className="group relative flex flex-col rounded-lg border border-white/[0.06] bg-[#0a0a0a] overflow-hidden transition-colors duration-150 hover:border-white/[0.12]"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.03), transparent 60%)`
            : "none",
        }}
      />

      {/* Preview */}
      <div className="relative w-full aspect-[16/10] bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Component />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-3">
        {/* Title row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <h3 className="text-[13px] font-medium text-white truncate">{effect.name}</h3>
            <span className="shrink-0 text-[10px] text-white/20 font-mono">{effect.library.packageName}</span>
          </div>
          <div className="flex gap-1 shrink-0">
            <button
              onClick={async () => {
                await copyToClipboard(buildAIPrompt(effect));
                setCopiedAI(true);
                setTimeout(() => setCopiedAI(false), 2000);
              }}
              className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                copiedAI
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-white/20 hover:text-white/50 hover:bg-white/[0.04]"
              }`}
            >
              {copiedAI ? "copied" : "ai"}
            </button>
            <button
              onClick={() => setShowCode(!showCode)}
              className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                showCode
                  ? "bg-white/[0.08] text-white/60"
                  : "text-white/20 hover:text-white/50 hover:bg-white/[0.04]"
              }`}
            >
              code
            </button>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-3 text-[10px] text-white/20 font-mono">
          {size && <span>{size}</span>}
          {stars != null && <span>{stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars} stars</span>}
          <a
            href={effect.library.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto hover:text-white/40 transition-colors"
          >
            docs
          </a>
        </div>

        {/* Code panel */}
        {showCode && (
          <div className="mt-1 flex flex-col gap-2">
            <div className="px-2.5 py-1.5 rounded bg-[#050505] border border-white/[0.06] font-mono text-[11px] text-white/40">
              <span className="text-white/15 select-none">$ </span>{effect.usage.install}
            </div>
            <CodeViewer code={{ tsx: effect.usage.tsx, css: effect.usage.css }} />
          </div>
        )}
      </div>
    </div>
  );
}
