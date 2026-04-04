export const usage = {
  install: "bun add react-rough-notation",
  tsx: `"use client";

import { useState, useEffect } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function HandDrawnAnnotation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <RoughNotationGroup show={show}>
      <p className="text-2xl leading-relaxed">
        <RoughNotation type="underline" color="#f59e0b" order={1}>
          Underlined text
        </RoughNotation>{" "}
        and{" "}
        <RoughNotation type="highlight" color="#3b82f6" order={2} multiline>
          highlighted text
        </RoughNotation>{" "}
        and{" "}
        <RoughNotation type="circle" color="#ef4444" padding={8} order={3}>
          circled
        </RoughNotation>{" "}
        words.
      </p>
    </RoughNotationGroup>
  );
}`,
};
