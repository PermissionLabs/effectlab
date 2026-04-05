export const usage = {
  install: "bun add react-xarrows",
  tsx: `"use client";

import Xarrow from "react-xarrows";

export default function ArrowDiagram() {
  return (
    <div style={{ position: "relative", width: 400, height: 300 }}>
      <div id="box-a" className="absolute top-0 left-10 px-4 py-2 bg-violet-500/20 rounded-lg text-violet-400">
        Box A
      </div>
      <div id="box-b" className="absolute bottom-0 right-10 px-4 py-2 bg-emerald-500/20 rounded-lg text-emerald-400">
        Box B
      </div>
      <Xarrow
        start="box-a"
        end="box-b"
        color="rgba(139, 92, 246, 0.5)"
        strokeWidth={2}
        headSize={4}
      />
    </div>
  );
}`,
};
