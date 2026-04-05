"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactZoomPanPinchInner"), { ssr: false });

export default function ReactZoomPanPinchDemo() {
  return <Inner />;
}
