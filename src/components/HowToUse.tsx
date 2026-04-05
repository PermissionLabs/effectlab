"use client";

import { useState } from "react";
import { toast } from "sonner";
import { copyToClipboard } from "@/lib/utils";

const installCmd = "/plugin marketplace add PermissionLabs/effectlab";

export default function HowToUse() {
  const [copied, setCopied] = useState(false);

  return (
    <section className="mb-12 rounded-2xl border border-border bg-surface p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* For Designers */}
        <div>
          <h3 className="text-[13px] font-semibold text-fg uppercase tracking-wider mb-4">
            For Designers
          </h3>
          <div className="flex flex-col gap-3">
            <Step n={1} text="Browse effects below and find one you like" />
            <Step n={2}>
              Click <strong className="text-fg">&quot;Copy for AI&quot;</strong> on the card
            </Step>
            <Step n={3} text="Paste into Claude Code, Cursor, or any AI assistant" />
            <Step n={4} text="AI installs the library and applies it to your project" />
          </div>
        </div>

        {/* For Claude Code Users */}
        <div>
          <h3 className="text-[13px] font-semibold text-fg uppercase tracking-wider mb-4">
            For Claude Code
          </h3>
          <p className="text-[13px] text-muted mb-3">
            Install the plugin — your AI automatically finds effects when you ask.
          </p>
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
          <p className="text-[11px] text-muted/40 mt-2">
            Then just ask: &quot;add a 3D tilt hover effect to my cards&quot;
          </p>
        </div>
      </div>
    </section>
  );
}

function Step({ n, text, children }: { n: number; text?: string; children?: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="shrink-0 w-6 h-6 rounded-full bg-fg text-bg text-[11px] font-bold flex items-center justify-center">
        {n}
      </span>
      <span className="text-[13px] text-muted leading-relaxed pt-0.5">
        {children || text}
      </span>
    </div>
  );
}
