"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./ActivityCalendarInner"), { ssr: false });

export default function ReactActivityCalendarDemo() {
  return <Inner />;
}
