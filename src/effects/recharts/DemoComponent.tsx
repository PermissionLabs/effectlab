"use client";

import dynamic from "next/dynamic";

const RechartsInner = dynamic(() => import("./RechartsInner"), { ssr: false });

export default function RechartsDemo() {
  return <RechartsInner />;
}
