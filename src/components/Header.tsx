"use client";

import NumberFlow from "@number-flow/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { effects } from "@/effects/registry";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 h-14 border-b border-border backdrop-blur-xl bg-bg/80">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-[15px] font-semibold tracking-tight text-fg">{t("header.brand")}</span>
          <span className="text-[11px] text-muted font-mono tabular-nums">
            <NumberFlow value={effects.length} />
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-4">
          <Link href="/" className="text-[13px] text-muted hover:text-fg transition-colors">
            {t("nav.allEffects")}
          </Link>
          <Link href="/compare" className="text-[13px] text-muted hover:text-fg transition-colors">
            {t("nav.compare")}
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://permissionlabs.github.io/effectlab/llms-full.txt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-muted hover:text-fg transition-colors font-mono hidden sm:block"
        >
          llms.txt
        </a>
        <LanguageSwitcher />
        <ThemeToggle />
        <a
          href="https://github.com/PermissionLabs/effectlab"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-fg transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
