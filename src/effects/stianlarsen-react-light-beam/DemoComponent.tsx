"use client";

import dynamic from "next/dynamic";

const LightBeamInner = dynamic(() => import("./LightBeamInner"), { ssr: false });

export default function StianlarsenReactLightBeamDemo() {
  return <LightBeamInner />;
}
