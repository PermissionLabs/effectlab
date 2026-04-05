"use client";

import dynamic from "next/dynamic";

const ReactHotToastInner = dynamic(() => import("./ReactHotToastInner"), { ssr: false });

export default function ReactHotToastDemo() {
  return <ReactHotToastInner />;
}
