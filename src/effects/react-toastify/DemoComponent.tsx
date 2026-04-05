"use client";

import dynamic from "next/dynamic";

const ReactToastifyInner = dynamic(() => import("./ReactToastifyInner"), { ssr: false });

export default function ReactToastifyDemo() {
  return <ReactToastifyInner />;
}
