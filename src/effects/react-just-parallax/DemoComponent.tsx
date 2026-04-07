"use client";

import dynamic from "next/dynamic";

const ParallaxInner = dynamic(() => import("./ParallaxInner"), { ssr: false });

export default function ReactJustParallaxDemo() {
  return <ParallaxInner />;
}
