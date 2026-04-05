"use client";

import dynamic from "next/dynamic";

const UsehooksInner = dynamic(() => import("./UsehooksInner"), { ssr: false });

export default function UidotdevUsehooksDemo() {
  return <UsehooksInner />;
}
