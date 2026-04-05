"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactGridLayoutInner"), { ssr: false });

export default function ReactGridLayoutDemo() {
  return <Inner />;
}
