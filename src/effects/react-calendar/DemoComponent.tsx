"use client";

import dynamic from "next/dynamic";

const ReactCalendarInner = dynamic(() => import("./ReactCalendarInner"), { ssr: false });

export default function ReactCalendarDemo() {
  return <ReactCalendarInner />;
}
