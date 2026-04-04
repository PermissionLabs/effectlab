"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./DreiScene"), { ssr: false });

export default function ReactThreeDreiDemo() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Scene />
    </div>
  );
}
