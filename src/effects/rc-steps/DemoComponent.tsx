"use client";

import dynamic from "next/dynamic";

const RcStepsInner = dynamic(() => import("./RcStepsInner"), {
  ssr: false,
});

export default function RcStepsDemo() {
  return <RcStepsInner />;
}
