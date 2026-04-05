"use client";

import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

const sections = [
  {
    title: "What is Radix UI?",
    content:
      "Radix UI is a set of unstyled, accessible UI primitives for building high-quality design systems and web applications in React.",
  },
  {
    title: "Why use Collapsible?",
    content:
      "The Collapsible component provides an accessible expand/collapse interaction with full keyboard support and ARIA attributes out of the box.",
  },
  {
    title: "How does the animation work?",
    content:
      "This demo uses the CSS grid trick — transitioning grid-template-rows from 0fr to 1fr — for a buttery smooth height animation without JavaScript measurement.",
  },
];

function CollapsibleSection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} className="w-full">
      <Collapsible.Trigger className="flex w-full items-center justify-between rounded-xl bg-white/5 px-5 py-4 text-left text-sm font-medium text-white/90 transition-colors hover:bg-white/10 border border-white/10 cursor-pointer">
        <span>{title}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`shrink-0 text-white/50 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Collapsible.Trigger>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <Collapsible.Content forceMount className="overflow-hidden">
          <p className="px-5 pt-3 pb-4 text-sm text-white/60 leading-relaxed">
            {content}
          </p>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
}

export default function RadixUiReactCollapsibleDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-3">
      <p className="text-white/60 text-xs uppercase tracking-widest mb-2">
        Click to expand sections
      </p>
      <div className="w-full max-w-md flex flex-col gap-2">
        {sections.map((s) => (
          <CollapsibleSection key={s.title} title={s.title} content={s.content} />
        ))}
      </div>
    </div>
  );
}
