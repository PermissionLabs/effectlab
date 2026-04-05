"use client";

import dynamic from "next/dynamic";

const UseGestureReactInner = dynamic(() => import("./UseGestureReactInner"), { ssr: false });

export default function UseGestureReactDemo() {
  return <UseGestureReactInner />;
}
