"use client";

import Xarrow from "react-xarrows";

const boxStyle =
  "px-4 py-3 rounded-xl border flex items-center justify-center text-xs font-semibold";

export default function ReactXarrowsInner() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-6">
        Connected elements
      </p>
      <div className="relative w-full max-w-sm h-72">
        <div
          id="xarrow-input"
          className={`${boxStyle} bg-violet-500/15 border-violet-500/30 text-violet-400 absolute top-0 left-1/2 -translate-x-1/2`}
        >
          API Request
        </div>

        <div
          id="xarrow-auth"
          className={`${boxStyle} bg-rose-500/15 border-rose-500/30 text-rose-400 absolute top-24 left-4`}
        >
          Auth Check
        </div>

        <div
          id="xarrow-cache"
          className={`${boxStyle} bg-cyan-500/15 border-cyan-500/30 text-cyan-400 absolute top-24 right-4`}
        >
          Cache Lookup
        </div>

        <div
          id="xarrow-response"
          className={`${boxStyle} bg-emerald-500/15 border-emerald-500/30 text-emerald-400 absolute bottom-0 left-1/2 -translate-x-1/2`}
        >
          Send Response
        </div>

        <Xarrow
          start="xarrow-input"
          end="xarrow-auth"
          color="rgba(139, 92, 246, 0.4)"
          strokeWidth={2}
          headSize={4}
          curveness={0.3}
        />
        <Xarrow
          start="xarrow-input"
          end="xarrow-cache"
          color="rgba(6, 182, 212, 0.4)"
          strokeWidth={2}
          headSize={4}
          curveness={0.3}
        />
        <Xarrow
          start="xarrow-auth"
          end="xarrow-response"
          color="rgba(244, 63, 94, 0.4)"
          strokeWidth={2}
          headSize={4}
          curveness={0.3}
        />
        <Xarrow
          start="xarrow-cache"
          end="xarrow-response"
          color="rgba(16, 185, 129, 0.4)"
          strokeWidth={2}
          headSize={4}
          curveness={0.3}
        />
      </div>
    </div>
  );
}
