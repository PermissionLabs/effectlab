"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./MasonryInner"), { ssr: false });

export default function ReactResponsiveMasonryDemo() {
  return <Inner />;
}
