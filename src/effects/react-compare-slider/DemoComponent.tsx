"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactCompareSliderInner"), { ssr: false });

export default function ReactCompareSliderDemo() {
  return <Inner />;
}
