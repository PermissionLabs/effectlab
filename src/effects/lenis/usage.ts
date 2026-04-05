export const usage = {
  install: "bun add lenis",
  tsx: `"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScrollPage() {
  return (
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
      <main>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Welcome</h1>
        </section>

        <section className="h-screen flex items-center justify-center bg-gray-900">
          <h2 className="text-3xl">Smooth Scrolling</h2>
        </section>

        <section className="h-screen flex items-center justify-center">
          <h2 className="text-3xl">With Inertia</h2>
        </section>

        <section className="h-screen flex items-center justify-center bg-gray-900">
          <p className="text-xl opacity-60">Powered by Lenis</p>
        </section>
      </main>
    </ReactLenis>
  );
}`,
};
