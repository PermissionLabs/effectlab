"use client";

import dynamic from "next/dynamic";

const ReactModalInner = dynamic(() => import("./ReactModalInner"), { ssr: false });

export default function ReactModalDemo() {
  return <ReactModalInner />;
}
