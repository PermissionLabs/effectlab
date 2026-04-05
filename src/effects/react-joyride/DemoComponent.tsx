"use client";

import dynamic from "next/dynamic";

const ReactJoyrideInner = dynamic(() => import("./ReactJoyrideInner"), { ssr: false });

export default function ReactJoyrideDemo() {
  return <ReactJoyrideInner />;
}
