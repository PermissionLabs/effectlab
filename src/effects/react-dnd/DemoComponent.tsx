"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactDndInner"), { ssr: false });

export default function ReactDndDemo() {
  return <Inner />;
}
