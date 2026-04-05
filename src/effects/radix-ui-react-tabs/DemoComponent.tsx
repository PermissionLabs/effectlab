"use client";

import { useState, useRef, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";

const tabs = [
  {
    value: "design",
    label: "Design",
    content:
      "Create beautiful interfaces with carefully crafted components. Every pixel matters when building premium user experiences.",
  },
  {
    value: "develop",
    label: "Develop",
    content:
      "Build with accessible primitives that integrate seamlessly. Radix provides unstyled, composable components for your design system.",
  },
  {
    value: "deploy",
    label: "Deploy",
    content:
      "Ship with confidence using production-ready components. Zero runtime overhead with full keyboard navigation and screen reader support.",
  },
];

export default function RadixUiReactTabsDemo() {
  const [activeTab, setActiveTab] = useState("design");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tabListRef.current) return;
    const activeEl = tabListRef.current.querySelector(
      `[data-state="active"]`
    ) as HTMLElement | null;
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6">
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full max-w-sm"
      >
        <div className="relative">
          <Tabs.List
            ref={tabListRef}
            className="relative flex border-b border-white/10 mb-4"
          >
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab.value}
                value={tab.value}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white/40 transition-colors duration-200 data-[state=active]:text-violet-400 outline-none cursor-pointer"
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
            <div
              className="absolute bottom-0 h-[2px] bg-violet-500 transition-all duration-300 ease-out rounded-full"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />
          </Tabs.List>
        </div>

        {tabs.map((tab) => (
          <Tabs.Content
            key={tab.value}
            value={tab.value}
            className="outline-none"
            style={activeTab === tab.value ? { animation: "fadeIn 0.3s ease-out" } : undefined}
          >
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
              <p className="text-white/60 text-sm leading-relaxed">
                {tab.content}
              </p>
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}
