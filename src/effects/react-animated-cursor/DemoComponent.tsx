"use client";

import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function ReactAnimatedCursorDemo() {
  return (
    <div className="relative w-full h-full p-6 flex flex-col items-center justify-center gap-5 cursor-none">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.3}
        innerStyle={{ backgroundColor: "#a78bfa" }}
        outerStyle={{ border: "2px solid #a78bfa" }}
        showSystemCursor={false}
        trailingSpeed={8}
        clickables={[
          "a",
          "button",
          ".cursor-hover",
        ]}
      />

      <p className="text-white/30 text-xs tracking-wider uppercase select-none">
        Move your cursor here
      </p>

      <div className="flex gap-3">
        <button className="cursor-hover px-4 py-2 rounded-lg bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm transition-colors hover:bg-violet-500/30 cursor-none">
          Hover me
        </button>
        <button className="cursor-hover px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm transition-colors hover:bg-blue-500/30 cursor-none">
          Click me
        </button>
      </div>

      <div className="flex gap-4 mt-2">
        <div className="cursor-hover w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl cursor-none">
          ✦
        </div>
        <div className="cursor-hover w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl cursor-none">
          ◆
        </div>
        <div className="cursor-hover w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl cursor-none">
          ●
        </div>
      </div>

      <p className="text-white/20 text-[10px] select-none">
        Cursor scales on interactive elements
      </p>
    </div>
  );
}
