"use client";

import { TypeAnimation } from "react-type-animation";

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
        Browse 100+ curated effects from real npm libraries. Preview live, compare bundle sizes, and copy code.
      </p>
    </div>
  );
}
