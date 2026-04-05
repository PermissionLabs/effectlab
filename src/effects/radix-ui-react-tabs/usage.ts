export const usage = {
  install: "bun add @radix-ui/react-tabs",
  tsx: `"use client";

import { useState, useRef, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";

const tabs = [
  { value: "tab1", label: "Tab 1", content: "Content for Tab 1" },
  { value: "tab2", label: "Tab 2", content: "Content for Tab 2" },
  { value: "tab3", label: "Tab 3", content: "Content for Tab 3" },
];

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tabListRef.current) return;
    const activeEl = tabListRef.current.querySelector(
      \`[data-state="active"]\`
    ) as HTMLElement | null;
    if (activeEl) {
      setIndicatorStyle({ left: activeEl.offsetLeft, width: activeEl.offsetWidth });
    }
  }, [activeTab]);

  return (
    <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
      <Tabs.List ref={tabListRef} style={{ display: "flex", position: "relative", borderBottom: "1px solid #333" }}>
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            style={{ flex: 1, padding: "8px 16px", background: "none", border: "none", color: "#999", cursor: "pointer" }}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            height: 2,
            background: "#8b5cf6",
            transition: "all 0.3s ease",
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Content key={tab.value} value={tab.value} style={{ padding: 16 }}>
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}`,
};
