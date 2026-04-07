"use client";

import dynamic from "next/dynamic";

const SplineInner = dynamic(() => import("./SplineInner"), { ssr: false });

export default function SplinetoolReactSplineDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <SplineInner />
    </div>
  );
}
