"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./TippyInner"), { ssr: false });

export default function TippyjsReactDemo() {
  return <Inner />;
}
