"use client";

import dynamic from "next/dynamic";

const GradientDemo = dynamic(
  () => import("./GradientInner"),
  { ssr: false, loading: () => <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6"><span className="text-4xl font-bold tracking-tight text-white/30">Loading...</span></div> }
);

export default function GradientTextWaveDemo() {
  return <GradientDemo />;
}
