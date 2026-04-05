"use client";

import { useState } from "react";
import { JsonView, darkStyles } from "react-json-view-lite";

const sampleData = {
  name: "EffectLab",
  version: "1.0.0",
  description: "Curated showcase of React visual effect libraries",
  author: {
    name: "Permission Labs",
    url: "https://permissionlabs.com",
  },
  features: ["Dark Theme", "Interactive Demos", "Copy-paste Code"],
  stats: {
    effects: 100,
    categories: 13,
    stars: 2450,
  },
  tags: ["react", "effects", "ui", "animation"],
  config: {
    theme: "dark",
    responsive: true,
    ssr: false,
    nested: {
      deep: {
        value: "Hello from the deep!",
        array: [1, 2, 3, null, true, false],
      },
    },
  },
};

const customStyles = {
  ...darkStyles,
  container: "json-view-container",
  basicChildStyle: darkStyles.basicChildStyle,
  label: darkStyles.label,
  nullValue: darkStyles.nullValue,
  undefinedValue: darkStyles.undefinedValue,
  numberValue: darkStyles.numberValue,
  stringValue: darkStyles.stringValue,
  booleanValue: darkStyles.booleanValue,
  otherValue: darkStyles.otherValue,
  punctuation: darkStyles.punctuation,
  collapseIcon: darkStyles.collapseIcon,
  expandIcon: darkStyles.expandIcon,
  collapsedContent: darkStyles.collapsedContent,
  noQuotesForStringValues: false,
};

export default function ReactJsonViewLiteDemo() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <div className="flex items-center gap-3 mb-2">
        <p className="text-white/60 text-xs uppercase tracking-widest">
          Collapsible JSON Tree
        </p>
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="px-3 py-1.5 rounded-lg bg-violet-500/15 hover:bg-violet-500/25 text-violet-400 text-xs font-medium transition-all border border-violet-500/20 active:scale-95"
        >
          {collapsed ? "Expand All" : "Collapse All"}
        </button>
      </div>
      <div className="w-full max-w-lg max-h-[320px] overflow-auto rounded-xl bg-[#0a0a1a] border border-white/10 p-4 text-sm font-mono">
        <JsonView
          data={sampleData}
          shouldExpandNode={() => !collapsed}
          style={customStyles}
        />
      </div>
    </div>
  );
}
