"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactMediumImageZoomInner"), { ssr: false });

export default function ReactMediumImageZoomDemo() {
  return <Inner />;
}
