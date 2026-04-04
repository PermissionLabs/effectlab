"use client";

import dynamic from "next/dynamic";

const HeroInner = dynamic(() => import("./HeroTitleInner"), {
  ssr: false,
  loading: () => (
    <h1 className="text-3xl font-bold tracking-tight text-fg">
      Visual Effects Showcase
    </h1>
  ),
});

export default function HeroTitle() {
  return <HeroInner />;
}
