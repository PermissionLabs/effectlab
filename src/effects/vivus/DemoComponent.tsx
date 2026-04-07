"use client";

import dynamic from "next/dynamic";

const VivusInner = dynamic(() => import("./VivusInner"), { ssr: false });

export default function VivusDemo() {
  return <VivusInner />;
}
