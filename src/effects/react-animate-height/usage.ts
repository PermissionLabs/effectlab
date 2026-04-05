export const usage = {
  install: "bun add react-animate-height",
  tsx: `"use client";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

export default function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        {open ? "Collapse" : "Expand"}
      </button>
      <AnimateHeight duration={300} height={open ? "auto" : 0}>
        <p>This content smoothly expands and collapses.</p>
      </AnimateHeight>
    </div>
  );
}`,
};
