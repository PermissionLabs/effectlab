"use client";

import { useState, useRef, useCallback, useEffect, memo } from "react";
import type { EffectDefinition } from "@/effects/types";
import CodeViewer from "./CodeViewer";
import { copyToClipboard } from "@/lib/utils";
import { toast } from "sonner";
import Skeleton from "react-loading-skeleton";
import { RotateCw } from "lucide-react";

const overlayBtnCls =
  "px-2.5 py-1 rounded-lg text-[11px] font-medium bg-black/50 text-white/60 hover:text-white border border-white/10 backdrop-blur-xl transition-all";

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

export default memo(function EffectCard({ effect }: { effect: EffectDefinition }) {
  const [showCode, setShowCode] = useState(false);
  const [copiedAI, setCopiedAI] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const replayRef = useRef<SVGSVGElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const Component = effect.component;

  // Bidirectional observer: mount when entering viewport, unmount when leaving
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setIsVisible(entry.isIntersecting); },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const stars = effect.packageMeta?.githubStars;
  const size = effect.packageMeta?.bundleSize;

  return (
    <div className="effect-card flex flex-col gap-3">
      {/* Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative rounded-2xl overflow-hidden bg-surface border border-border hover:border-fg/[0.12] transition-all duration-200"
      >
        {/* Hover glow */}
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: isHovered
              ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.05), transparent 50%)`
              : "none",
          }}
        />

        {/* Preview */}
        <div className="relative w-full aspect-[4/5] min-h-[360px] bg-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-0 grid place-items-center">
            {isVisible ? <Component key={replayKey} /> : (
              <div className="w-full h-full p-6 flex flex-col gap-3 justify-center">
                <Skeleton height={20} width="60%" baseColor="var(--surface-alt)" highlightColor="var(--surface)" />
                <Skeleton height={14} count={2} baseColor="var(--surface-alt)" highlightColor="var(--surface)" />
                <Skeleton height={40} borderRadius={12} baseColor="var(--surface-alt)" highlightColor="var(--surface)" />
              </div>
            )}
          </div>

          {/* Library badge — bottom left on hover */}
          <div className="absolute bottom-2.5 left-2.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <a
              href={effect.library.url}
              target="_blank"
              rel="noopener noreferrer"
              className={overlayBtnCls}
            >
              {effect.library.packageName}
            </a>
          </div>

          {/* Hover action buttons */}
          <div className="absolute top-2.5 right-2.5 z-20 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setReplayKey((k) => k + 1);
                const icon = replayRef.current;
                if (icon) {
                  icon.classList.remove("animate-spin-once");
                  void icon.getBoundingClientRect();
                  icon.classList.add("animate-spin-once");
                }
              }}
              className={`p-1.5 ${overlayBtnCls}`}
              title="Replay"
            >
              <RotateCw ref={replayRef} size={14} onAnimationEnd={() => replayRef.current?.classList.remove("animate-spin-once")} />
            </button>
            <button
              onClick={async (e) => {
                e.stopPropagation();
                await copyToClipboard(buildAIPrompt(effect));
                setCopiedAI(true);
                toast.success(`Copied ${effect.name}`, {
                  description: "Paste into Claude Code or your AI assistant",
                });
                setTimeout(() => setCopiedAI(false), 2000);
              }}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium backdrop-blur-xl transition-all ${
                copiedAI
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-black/50 text-white/60 hover:text-white border border-white/10"
              }`}
            >
              {copiedAI ? "Copied!" : "Copy for AI"}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setShowCode(!showCode); }}
              className={overlayBtnCls}
            >
              Code
            </button>
          </div>
        </div>
      </div>

      {/* Label below card — like before.click's app name */}
      <div className="flex items-center justify-between px-0.5">
        <div className="min-w-0">
          <h3 className="text-[14px] font-semibold text-fg truncate">{effect.name}</h3>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[12px] text-muted">{effect.library.packageName}</span>
            {size && <span className="text-[11px] text-muted/60" title="Bundle size (minified + gzipped)">{size}</span>}
            {stars != null && stars >= 1000 && (
              <span className="text-[11px] text-muted/60" title={`${stars.toLocaleString()} GitHub stars`}>{(stars / 1000).toFixed(1)}k stars</span>
            )}
          </div>
        </div>
        <a
          href={effect.library.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-muted/50 hover:text-muted transition-colors shrink-0"
        >
          docs →
        </a>
      </div>

      {/* Code panel */}
      {showCode && (
        <div className="rounded-xl border border-white/[0.06] bg-[#0a0a0a] p-3 flex flex-col gap-2">
          <div className="px-2.5 py-1.5 rounded-lg bg-black border border-white/[0.06] font-mono text-[11px] text-white/40">
            <span className="text-white/15 select-none">$ </span>{effect.usage.install}
          </div>
          <CodeViewer code={{ tsx: effect.usage.tsx, css: effect.usage.css }} />
        </div>
      )}
    </div>
  );
}, (prev, next) => prev.effect.slug === next.effect.slug)
