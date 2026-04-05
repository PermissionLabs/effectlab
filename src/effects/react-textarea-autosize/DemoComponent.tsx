"use client";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function ReactTextareaAutosizeDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-8 gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-white/80 text-sm font-medium">
          Auto-growing Textarea
        </span>
        <span className="text-white/40 text-xs">
          Start typing to see it expand smoothly
        </span>
      </div>

      <div className="w-full max-w-md">
        <TextareaAutosize
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something here... The textarea will grow as you add more lines."
          minRows={3}
          maxRows={10}
          className="w-full resize-none rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200"
          style={{ lineHeight: "1.6" }}
        />
      </div>

      <div className="flex gap-4 text-xs text-white/30">
        <span>{value.length} characters</span>
        <span>{value.split("\n").length} line{value.split("\n").length !== 1 ? "s" : ""}</span>
      </div>
    </div>
  );
}
