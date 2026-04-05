"use client";

import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { toast } from "sonner";
import { copyToClipboard } from "@/lib/utils";

const subtitles = [
  "& animation libraries.",
  2000,
  "& scroll effects.",
  2000,
  "& hover interactions.",
  2000,
  "& 3D scenes.",
  2000,
  "& particle systems.",
  2000,
  "& text animations.",
  2000,
];

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="mb-10">
      <h1 className="text-[2.75rem] leading-[1.15] font-bold tracking-[-0.02em] text-fg">
        React visual effects
      </h1>
      <h2 className="text-[2.75rem] leading-[1.15] font-bold tracking-[-0.02em] text-fg/30">
        <TypeAnimation
          sequence={subtitles}
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
          cursor={true}
        />
      </h2>
      <p className="mt-4 text-[15px] text-muted leading-relaxed max-w-lg">
        Browse 100+ curated effects. Find one you like, hit <strong className="text-fg">&quot;Copy for AI&quot;</strong>, paste into Claude Code — done.
      </p>

      {/* Quick install CTA */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          onClick={async () => {
            await copyToClipboard("/plugin marketplace add PermissionLabs/effectlab && /plugin install effectlab");
            setCopied(true);
            toast.success("Install command copied", { description: "Paste into Claude Code to install the plugin" });
            setTimeout(() => setCopied(false), 2000);
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all border ${
            copied
              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
              : "bg-fg text-bg border-fg hover:opacity-90"
          }`}
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              Install Claude Code Plugin
            </>
          )}
        </button>
        <a
          href="https://github.com/PermissionLabs/effectlab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium text-muted border border-border hover:border-fg/20 hover:text-fg transition-all"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </div>
  );
}
