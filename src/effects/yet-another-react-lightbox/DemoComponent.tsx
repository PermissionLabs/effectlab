"use client";

import dynamic from "next/dynamic";

const LightboxInner = dynamic(() => import("./LightboxInner"), {
  ssr: false,
});

export default function YetAnotherReactLightboxDemo() {
  return <LightboxInner />;
}
