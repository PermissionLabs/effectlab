"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./LenisInner"), { ssr: false });

export default function LenisDemo() {
  return <Inner />;
}
