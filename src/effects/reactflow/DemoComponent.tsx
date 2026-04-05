"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactflowInner"), { ssr: false });

export default function ReactflowDemo() {
  return <Inner />;
}
