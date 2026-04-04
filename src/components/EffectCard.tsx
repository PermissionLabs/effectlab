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

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:border-accent/30"
    >
      {/* Hover glow overlay — powered by motion (framer) */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.12), transparent 60%)`
            : "none",
        }}
      />
      {/* Live preview */}
      <div className="relative w-full aspect-[4/3] bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Component />
        </div>

        {/* Library badge — top right overlay */}
        <a
          href={effect.library.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-white/70 hover:text-white hover:border-white/20 transition-all"
        >
          {effect.library.icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={effect.library.icon}
              alt={effect.library.name}
              width={14}
              height={14}
              className="rounded-sm"
            />
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          )}
          {effect.library.name}
        </a>

        {/* Install type badge — top left */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-white/50">
          {effect.library.installType === "npm" ? (
            <>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-red-400">
                <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0h-2.666v1.336H6.666V8.667h4v5.331zm12 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-1.336V8.667h6.666v5.331zM11.333 12v-2H10v2h1.333z" />
              </svg>
              npm
            </>
          ) : (
            <>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              CLI
            </>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold">{effect.name}</h3>
            <p className="text-xs text-muted line-clamp-2">{effect.description}</p>
          </div>
          <div className="flex gap-1.5 shrink-0">
            <button
              onClick={async () => {
                await copyToClipboard(buildAIPrompt(effect));
                setCopiedAI(true);
                setTimeout(() => setCopiedAI(false), 2000);
              }}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                copiedAI
                  ? "bg-green-500/20 text-green-400"
                  : "bg-surface-alt border border-border text-muted hover:text-fg"
              }`}
              title="Copy LLM-friendly prompt with install & usage instructions"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 0-4 4c0 2 1 3 2 4l2 2 2-2c1-1 2-2 2-4a4 4 0 0 0-4-4z" />
                <path d="M12 12v6" />
                <path d="M8 18h8" />
              </svg>
              {copiedAI ? "Copied!" : "AI"}
            </button>
            <button
              onClick={() => setShowCode(!showCode)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                showCode
                  ? "bg-accent/20 text-accent"
                  : "bg-surface-alt border border-border text-muted hover:text-fg"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Code
            </button>
          </div>
        </div>

        {/* Package meta stats */}
        {effect.packageMeta && (
          <div className="flex items-center gap-3 text-[11px] text-muted">
            {effect.packageMeta.bundleSize && (
              <span className="flex items-center gap-1" title="Bundle size (min+gzip)">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                {effect.packageMeta.bundleSize}
              </span>
            )}
            {effect.packageMeta.githubStars != null && (
              <span className="flex items-center gap-1" title="GitHub stars">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500/70"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                {effect.packageMeta.githubStars >= 1000
                  ? `${(effect.packageMeta.githubStars / 1000).toFixed(1)}k`
                  : effect.packageMeta.githubStars}
              </span>
            )}
            {effect.packageMeta.weeklyDownloads != null && (
              <span className="flex items-center gap-1" title="Weekly npm downloads">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                {effect.packageMeta.weeklyDownloads >= 1000000
                  ? `${(effect.packageMeta.weeklyDownloads / 1000000).toFixed(1)}M/w`
                  : effect.packageMeta.weeklyDownloads >= 1000
                  ? `${(effect.packageMeta.weeklyDownloads / 1000).toFixed(0)}K/w`
                  : `${effect.packageMeta.weeklyDownloads}/w`}
              </span>
            )}
            {effect.packageMeta.lastUpdated && (
              <span className="flex items-center gap-1" title="Last updated">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {effect.packageMeta.lastUpdated}
              </span>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          <span className="px-2 py-0.5 rounded-md text-[11px] bg-accent/10 text-accent font-medium capitalize">
            {effect.category}
          </span>
          {effect.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[11px] bg-surface-alt text-muted capitalize"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Install + Code viewer */}
        {showCode && (
          <div className="mt-2 flex flex-col gap-3">
            {/* Install command */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0d1117] border border-border font-mono text-xs text-green-400">
              <span className="text-muted select-none">$</span>
              <span className="flex-1">{effect.usage.install}</span>
            </div>
            <CodeViewer code={{ tsx: effect.usage.tsx, css: effect.usage.css }} />
          </div>
        )}
      </div>
    </div>
  );
}
