export const usage = {
  install: "bun add react-virtuoso",
  tsx: `"use client";

import { Virtuoso } from "react-virtuoso";

export default function ChatList() {
  return (
    <Virtuoso
      style={{ height: 400 }}
      totalCount={1000}
      itemContent={(index) => (
        <div className="flex gap-3 px-4 py-2">
          <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-xs text-violet-400">
            U
          </div>
          <div className="bg-white/5 rounded-lg px-3 py-2 text-sm text-white/70">
            Message {index + 1}
          </div>
        </div>
      )}
    />
  );
}`,
};
