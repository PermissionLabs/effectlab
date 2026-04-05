"use client";

import dynamic from "next/dynamic";

const NextThemesInner = dynamic(() => import("./NextThemesInner"), { ssr: false });

export default function NextThemesDemo() {
  return <NextThemesInner />;
}
