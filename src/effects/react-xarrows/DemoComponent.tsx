"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactXarrowsInner"), { ssr: false });

export default function ReactXarrowsDemo() {
  return <Inner />;
}
