"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactScrollMotionInner"), { ssr: false });

export default function ReactScrollMotionDemo() {
  return <Inner />;
}
