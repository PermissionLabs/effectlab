export const usage = {
  install: "bun add @floating-ui/react",
  tsx: `"use client";

import { useState, useRef } from "react";
import {
  useFloating,
  useHover,
  useInteractions,
  offset,
  flip,
  shift,
  arrow,
  FloatingArrow,
} from "@floating-ui/react";

function Tooltip({ children, content }: { children: React.ReactNode; content: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    middleware: [offset(8), flip(), shift(), arrow({ element: arrowRef })],
  });

  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <span ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </span>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          role="tooltip"
          className="bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg"
        >
          {content}
          <FloatingArrow ref={arrowRef} context={context} fill="#111827" />
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <div style={{ display: "flex", gap: 16, padding: 48 }}>
      <Tooltip content="Save your work">
        <button>Save</button>
      </Tooltip>
      <Tooltip content="Delete this item">
        <button>Delete</button>
      </Tooltip>
    </div>
  );
}`,
};
