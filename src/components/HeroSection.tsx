"use client";

import { useState, useEffect, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { TypeAnimation } from "react-type-animation";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Tilt from "react-parallax-tilt";

export default function HeroSection() {
  const t = useTranslations("hero");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 600);
    return () => clearTimeout(timer);
  }, []);

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

      <div className="mt-10 flex justify-center">
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          perspective={800}
          glareEnable={true}
          glareMaxOpacity={0.12}
          glareColor="#a78bfa"
          glareBorderRadius="16px"
          scale={1.02}
          transitionSpeed={1500}
          style={{ borderRadius: 16 }}
        >
          <div
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 max-w-lg space-y-3"
            style={{ boxShadow: "0 8px 40px rgba(139, 92, 246, 0.08)" }}
          >
            <RoughNotationGroup show={show}>
              <p className="text-[15px] sm:text-[16px] text-muted/70 leading-relaxed">
                {t.rich("pain1", {
                  accent: (chunks: ReactNode) => (
                    <RoughNotation type="underline" color="#f59e0b" strokeWidth={2} order={1}>
                      <span className="text-muted">{chunks}</span>
                    </RoughNotation>
                  ),
                })}
              </p>
              <p className="text-[15px] sm:text-[16px] text-muted/70 leading-relaxed">
                {t.rich("pain2", {
                  accent: (chunks: ReactNode) => (
                    <RoughNotation type="underline" color="#f472b6" strokeWidth={2} order={2}>
                      <span className="text-muted">{chunks}</span>
                    </RoughNotation>
                  ),
                })}
              </p>
              <div className="h-px bg-white/[0.06]" />
              <p className="text-[15px] sm:text-[16px] text-fg/90 font-medium leading-relaxed">
                {t.rich("cta", {
                  mark: (chunks: ReactNode) => (
                    <span className="relative">
                      <RoughNotation type="highlight" color="rgba(52, 211, 153, 0.25)" order={3} multiline>
                        <span className="text-fg">{chunks}</span>
                      </RoughNotation>
                    </span>
                  ),
                })}
              </p>
            </RoughNotationGroup>
          </div>
        </Tilt>
      </div>
    </div>
  );
}
