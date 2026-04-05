"use client";

import dynamic from "next/dynamic";

const ReactIntersectionObserverInner = dynamic(() => import("./ReactIntersectionObserverInner"), { ssr: false });

export default function ReactIntersectionObserverDemo() {
  return <ReactIntersectionObserverInner />;
}
