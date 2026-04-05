"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactEasyCropInner"), { ssr: false });

export default function ReactEasyCropDemo() {
  return <Inner />;
}
