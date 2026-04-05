"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./DemoComponentInner"), { ssr: false });

export default function ReactBlobDemo() {
  return <Inner />;
}
