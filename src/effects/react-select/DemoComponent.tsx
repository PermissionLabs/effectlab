"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactSelectInner"), { ssr: false });

export default function ReactSelectDemo() {
  return <Inner />;
}
