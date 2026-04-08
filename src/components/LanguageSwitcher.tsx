"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("lang");

  const otherLocale = locale === "en" ? "ko" : "en";

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      className="text-[12px] text-muted hover:text-fg transition-colors font-mono hidden sm:block"
    >
      {t("switch")}
    </Link>
  );
}
