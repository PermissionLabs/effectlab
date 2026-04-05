"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";

function BeforePane() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-700 flex items-end p-6">
      <span className="text-white/90 text-sm font-semibold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-md backdrop-blur-sm">
        Before
      </span>
    </div>
  );
}

function AfterPane() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-500 via-rose-500 to-amber-600 flex items-end justify-end p-6">
      <span className="text-white/90 text-sm font-semibold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-md backdrop-blur-sm">
        After
      </span>
    </div>
  );
}

export default function ReactCompareSliderInner() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-4 overflow-hidden">
      <div className="w-full h-full rounded-xl overflow-hidden border border-white/10">
        <ReactCompareSlider
          itemOne={<BeforePane />}
          itemTwo={<AfterPane />}
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                backdropFilter: "none",
                background: "white",
                border: 0,
                color: "#333",
              }}
              linesStyle={{ opacity: 0.5 }}
            />
          }
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
