"use client";

import dynamic from "next/dynamic";

const GranimInner = dynamic(() => import("./GranimInner"), { ssr: false });

export default function GranimDemo() {
  return <GranimInner />;
}
