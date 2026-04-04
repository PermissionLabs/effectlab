"use client";

import { useState, useEffect } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function RoughNotationDemo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <p className="text-2xl font-medium leading-relaxed text-center max-w-lg text-white">
        <RoughNotationGroup show={show}>
          <RoughNotation
            type="underline"
            color="#f59e0b"
            strokeWidth={2}
            order={1}
          >
            Hand-drawn annotations
          </RoughNotation>{" "}
          make your text feel{" "}
          <RoughNotation
            type="highlight"
            color="#3b82f6"
            order={2}
            multiline
          >
            alive and personal
          </RoughNotation>
          . Use them to{" "}
          <RoughNotation
            type="circle"
            color="#ef4444"
            strokeWidth={2}
            padding={8}
            order={3}
          >
            emphasize
          </RoughNotation>{" "}
          key ideas or add{" "}
          <RoughNotation
            type="bracket"
            color="#10b981"
            strokeWidth={2}
            brackets={["left", "right"]}
            order={4}
          >
            structural highlights
          </RoughNotation>{" "}
          to your content.
        </RoughNotationGroup>
      </p>

      <button
        onClick={() => {
          setShow(false);
          setTimeout(() => setShow(true), 100);
        }}
        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
      >
        Replay Annotations
      </button>
    </div>
  );
}
