export const usage = {
  install: "bun add react-json-view-lite",
  tsx: `"use client";

import { useState } from "react";
import { JsonView, darkStyles } from "react-json-view-lite";

const data = {
  user: { name: "Alice", role: "admin" },
  settings: { theme: "dark", notifications: true },
  items: [1, 2, 3],
};

export default function JsonViewExample() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="p-6">
      <button onClick={() => setCollapsed((c) => !c)}>
        {collapsed ? "Expand" : "Collapse"}
      </button>
      <JsonView
        data={data}
        shouldExpandNode={() => !collapsed}
        style={darkStyles}
      />
    </div>
  );
}`,
};
