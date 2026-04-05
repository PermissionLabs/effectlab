export const usage = {
  install: "bun add rc-steps",
  tsx: `"use client";

import { useState } from "react";
import Steps from "rc-steps";
import "rc-steps/assets/index.css";

const items = [
  { title: "Step 1", description: "First" },
  { title: "Step 2", description: "Second" },
  { title: "Step 3", description: "Third" },
];

export default function StepperExample() {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <Steps current={current} items={items} />
      <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
        >
          Prev
        </button>
        <button
          onClick={() => setCurrent((c) => Math.min(items.length - 1, c + 1))}
          disabled={current === items.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}`,
};
