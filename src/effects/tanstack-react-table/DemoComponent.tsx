"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./TanstackTableInner"), { ssr: false });

export default function TanstackReactTableDemo() {
  return <Inner />;
}
