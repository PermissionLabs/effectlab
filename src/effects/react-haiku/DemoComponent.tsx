"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ReactHaikuInner"), { ssr: false });

export default function ReactHaikuDemo() {
  return <Inner />;
}
