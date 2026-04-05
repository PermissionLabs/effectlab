export const usage = {
  install: "bun add react-textarea-autosize",
  tsx: `"use client";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function TextareaAutosizeExample() {
  const [value, setValue] = useState("");

  return (
    <div className="p-8 max-w-md mx-auto">
      <TextareaAutosize
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Start typing... The textarea grows with your content."
        minRows={3}
        maxRows={12}
        className="w-full resize-none rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
      />
      <p className="mt-2 text-sm text-gray-500">{value.length} characters</p>
    </div>
  );
}`,
};
