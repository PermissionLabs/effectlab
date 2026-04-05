"use client";

import { useState } from "react";
import { toast } from "sonner";
import { copyToClipboard } from "@/lib/utils";

const installCmd = "/plugin marketplace add PermissionLabs/effectlab";

export default function HowToUse() {
  const [copied, setCopied] = useState(false);

  return (
    <section className="mb-12 flex flex-col gap-6">
      {/* Step 1: Install */}
      <div className="rounded-2xl border border-border bg-surface p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="shrink-0 w-6 h-6 rounded-full bg-fg text-bg text-[11px] font-bold flex items-center justify-center">1</span>
          <h3 className="text-[14px] font-semibold text-fg">Install the Claude Code plugin</h3>
        </div>
        <button
          onClick={async () => {
            await copyToClipboard(installCmd);
            setCopied(true);
            toast.success("Copied install command");
            setTimeout(() => setCopied(false), 2000);
          }}
          className="w-full flex items-center gap-2 px-4 py-3 rounded-xl bg-bg border border-border font-mono text-[12px] text-muted hover:border-fg/20 transition-all group cursor-pointer"
        >
          <span className="text-muted/40 select-none">$</span>
          <span className="flex-1 text-left truncate">{installCmd}</span>
          <span className={`text-[10px] shrink-0 transition-colors ${copied ? "text-emerald-500" : "text-muted/30 group-hover:text-muted"}`}>
            {copied ? "copied!" : "copy"}
          </span>
        </button>
      </div>

      {/* Step 2: How to use */}
      <div className="rounded-2xl border border-border bg-surface p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="shrink-0 w-6 h-6 rounded-full bg-fg text-bg text-[11px] font-bold flex items-center justify-center">2</span>
          <h3 className="text-[14px] font-semibold text-fg">Use it</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option A: Ask naturally */}
          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-medium text-fg/70 uppercase tracking-wider">Option A — Just ask</p>
            <p className="text-[13px] text-muted">
              Describe what you need. The plugin automatically finds the right library.
            </p>
            <div className="mt-1 rounded-lg bg-bg border border-border px-3 py-2 font-mono text-[12px] text-muted/70">
              &quot;add a 3D tilt hover effect to my cards&quot;
            </div>
            <div className="rounded-lg bg-bg border border-border px-3 py-2 font-mono text-[12px] text-muted/70">
              &quot;I need a typewriter animation for the hero&quot;
            </div>
          </div>

          {/* Option B: Browse and copy */}
          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-medium text-fg/70 uppercase tracking-wider">Option B — Browse & copy</p>
            <p className="text-[13px] text-muted">
              Find an effect below. Hit <strong className="text-fg">&quot;Copy for AI&quot;</strong> and paste into Claude Code.
            </p>
            <div className="mt-1 flex items-center gap-2 text-[12px] text-muted/50">
              <span>Browse</span>
              <span className="text-muted/20">→</span>
              <span>Copy for AI</span>
              <span className="text-muted/20">→</span>
              <span>Paste</span>
              <span className="text-muted/20">→</span>
              <span className="text-fg/70">Done</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
