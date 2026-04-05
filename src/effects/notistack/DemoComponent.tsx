"use client";

import dynamic from "next/dynamic";

const NotistackInner = dynamic(() => import("./NotistackInner"), { ssr: false });

export default function NotistackDemo() {
  return <NotistackInner />;
}
