"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./TwistezoReactTextScrambleInner"), { ssr: false });

export default function TwistezoReactTextScrambleDemo() {
  return <Inner />;
}
