"use client";

import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./BalancerInner"), { ssr: false });

export default function ReactWrapBalancerDemo() {
  return <Inner />;
}
