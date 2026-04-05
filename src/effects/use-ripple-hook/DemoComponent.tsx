"use client";

import dynamic from "next/dynamic";

const UseRippleInner = dynamic(() => import("./UseRippleInner"), { ssr: false });

export default function UseRippleHookDemo() {
  return <UseRippleInner />;
}
