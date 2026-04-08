"use client";

import { useTranslations } from "next-intl";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const t = useTranslations("hero");

  const subtitles = [
    t("subtitle1"), 2000,
    t("subtitle2"), 2000,
    t("subtitle3"), 2000,
    t("subtitle4"), 2000,
    t("subtitle5"), 2000,
    t("subtitle6"), 2000,
  ];

  return (
    <div className="mb-10">
      <h1 className="text-[2.75rem] leading-[1.15] font-bold tracking-[-0.02em] text-fg">
        {t("title")}
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
        {t("description")}
      </p>
    </div>
  );
}
