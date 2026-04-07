"use client";

import dynamic from "next/dynamic";

const RiveInner = dynamic(() => import("./RiveInner"), { ssr: false });

export default function RiveAppReactCanvasDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <RiveInner />
    </div>
  );
}
