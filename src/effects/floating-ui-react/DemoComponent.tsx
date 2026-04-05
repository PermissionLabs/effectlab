"use client";

import { useState } from "react";
import {
  useFloating,
  useHover,
  useInteractions,
  offset,
  flip,
  shift,
  arrow,
  FloatingArrow,
  type Placement,
} from "@floating-ui/react";
import { useRef } from "react";

function Tooltip({
  label,
  content,
  placement,
  color,
}: {
  label: string;
  content: string;
  placement: Placement;
  color: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
  });

  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="px-5 py-3 rounded-xl text-sm font-medium transition-all active:scale-95 border"
        style={{
          backgroundColor: `${color}15`,
          borderColor: `${color}30`,
          color: color,
        }}
      >
        {label}
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="px-3 py-2 rounded-lg text-xs text-white/90 shadow-xl z-50 max-w-[200px]"
          role="tooltip"
        >
          <div
            className="absolute inset-0 rounded-lg -z-10"
            style={{ backgroundColor: "#1a1a2e", border: `1px solid ${color}30` }}
          />
          {content}
          <FloatingArrow
            ref={arrowRef}
            context={context}
            fill="#1a1a2e"
            strokeWidth={1}
            stroke={`${color}30`}
          />
        </div>
      )}
    </>
  );
}

export default function FloatingUiReactDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-6">
      <p className="text-white/50 text-xs uppercase tracking-widest">
        Hover each button to see tooltips
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Tooltip
          label="Top Tooltip"
          content="This tooltip appears above the button with smart repositioning."
          placement="top"
          color="#8b5cf6"
        />
        <Tooltip
          label="Right Tooltip"
          content="Positioned to the right with an arrow indicator."
          placement="right"
          color="#3b82f6"
        />
        <Tooltip
          label="Bottom Tooltip"
          content="Floating UI handles overflow and flipping automatically."
          placement="bottom"
          color="#10b981"
        />
      </div>
    </div>
  );
}
