"use client";

import Header from "@/components/Header";
import CompareView from "@/components/CompareView";
import ScrollToTop from "@/components/ScrollToTop";
import { effects } from "@/effects/registry";

export default function ComparePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-bg">
      <Header />
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 pt-10 pb-16">
        <CompareView effects={effects} />
      </main>
      <ScrollToTop />
    </div>
  );
}
