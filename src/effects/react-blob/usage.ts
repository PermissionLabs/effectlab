export const usage = {
  install: "bun add react-blob",
  tsx: `"use client";

import { Blob } from "react-blob";

export default function BlobExample() {
  return (
    <div className="flex items-center justify-center h-64">
      <Blob
        size="200px"
        style={{
          background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
          boxShadow: "0 0 40px rgba(139, 92, 246, 0.4)",
        }}
      />
    </div>
  );
}`,
};
