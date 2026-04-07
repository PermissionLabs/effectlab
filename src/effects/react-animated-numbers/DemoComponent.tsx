"use client";

import dynamic from "next/dynamic";

const AnimatedNumbersInner = dynamic(() => import("./AnimatedNumbersInner"), {
  ssr: false,
});

export default function ReactAnimatedNumbersDemo() {
  return <AnimatedNumbersInner />;
}
