export const usage = {
  install: "bun add react-copy-to-clipboard @types/react-copy-to-clipboard",
  tsx: `"use client";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function CopyExample() {
  const [copied, setCopied] = useState(false);
  const text = "bun add react-copy-to-clipboard";

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <code>{text}</code>
      <CopyToClipboard text={text} onCopy={handleCopy}>
        <button>{copied ? "Copied!" : "Copy"}</button>
      </CopyToClipboard>
    </div>
  );
}`,
};
