"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./DndKitInner"), { ssr: false });

export default function DndKitCoreDemo() {
  return <Inner />;
}
