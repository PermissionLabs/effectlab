"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./PostprocessingScene"), { ssr: false });

export default function ReactThreePostprocessingDemo() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Scene />
    </div>
  );
}
