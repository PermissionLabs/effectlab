"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactDatepickerInner"), { ssr: false });

export default function ReactDatepickerDemo() {
  return <Inner />;
}
