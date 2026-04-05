"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactTooltipInner"), { ssr: false });

export default function ReactTooltipDemo() {
  return <Inner />;
}
