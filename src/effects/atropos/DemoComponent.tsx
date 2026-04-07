"use client";

import dynamic from "next/dynamic";

const AtroposInner = dynamic(() => import("./AtroposInner"), { ssr: false });

export default function AtroposDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <AtroposInner />
    </div>
  );
}
