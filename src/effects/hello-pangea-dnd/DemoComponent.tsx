"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./HelloPangeaInner"), { ssr: false });

export default function HelloPangeaDndDemo() {
  return <Inner />;
}
