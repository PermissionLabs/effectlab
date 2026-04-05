export const usage = {
  install: "bun add @uidotdev/usehooks",
  tsx: `"use client";

import { useWindowSize } from "@uidotdev/usehooks";

export default function WindowSizeDisplay() {
  const { width, height } = useWindowSize();

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h2 className="text-lg font-semibold text-white/80">
        Window Size
      </h2>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center bg-white/5 rounded-lg px-6 py-4">
          <span className="text-sm text-white/50">Width</span>
          <span className="text-3xl font-bold text-violet-400">
            {width ?? "--"}
          </span>
        </div>
        <span className="text-white/30 text-xl">&times;</span>
        <div className="flex flex-col items-center bg-white/5 rounded-lg px-6 py-4">
          <span className="text-sm text-white/50">Height</span>
          <span className="text-3xl font-bold text-violet-400">
            {height ?? "--"}
          </span>
        </div>
      </div>
    </div>
  );
}`,
};
