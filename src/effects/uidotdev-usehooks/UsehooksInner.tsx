"use client";

import { useWindowSize } from "@uidotdev/usehooks";

export default function UsehooksInner() {
  const { width, height } = useWindowSize();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-6">
      <p className="text-white/50 text-xs uppercase tracking-widest">
        Live Window Dimensions
      </p>

      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center gap-1 bg-white/5 border border-violet-500/20 rounded-xl px-8 py-5">
          <span className="text-xs text-violet-400/70 uppercase tracking-wider">
            Width
          </span>
          <span className="text-4xl font-bold text-violet-400 tabular-nums">
            {width ?? "--"}
          </span>
          <span className="text-xs text-white/30">px</span>
        </div>

        <span className="text-white/20 text-2xl font-light">&times;</span>

        <div className="flex flex-col items-center gap-1 bg-white/5 border border-violet-500/20 rounded-xl px-8 py-5">
          <span className="text-xs text-violet-400/70 uppercase tracking-wider">
            Height
          </span>
          <span className="text-4xl font-bold text-violet-400 tabular-nums">
            {height ?? "--"}
          </span>
          <span className="text-xs text-white/30">px</span>
        </div>
      </div>

      <p className="text-white/25 text-xs text-center">
        Resize your browser window to see values update in real-time
      </p>
    </div>
  );
}
