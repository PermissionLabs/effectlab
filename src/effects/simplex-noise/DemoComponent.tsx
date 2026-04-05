"use client";

import dynamic from "next/dynamic";

const SimplexNoiseInner = dynamic(() => import("./SimplexNoiseInner"), { ssr: false });

export default function SimplexNoiseDemo() {
  return <SimplexNoiseInner />;
}
