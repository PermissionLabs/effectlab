export const usage = {
  install: "bun add @radix-ui/react-collapsible",
  tsx: `"use client";

import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

export default function CollapsibleExample() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="flex w-full items-center justify-between rounded-lg bg-gray-800 px-4 py-3 text-white">
        <span>Toggle Section</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={\`transition-transform duration-300 \${open ? "rotate-180" : ""}\`}
        >
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Collapsible.Trigger>
      {/* CSS grid trick for smooth height animation */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <Collapsible.Content forceMount className="overflow-hidden">
          <p className="px-4 pt-2 pb-3 text-gray-300">
            Your collapsible content goes here. The height animates smoothly
            using the CSS grid trick (grid-template-rows: 0fr to 1fr).
          </p>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
}`,
};
