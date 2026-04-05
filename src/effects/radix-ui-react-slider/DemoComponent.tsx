"use client";

import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

export default function RadixUiReactSliderDemo() {
  const [singleValue, setSingleValue] = useState([40]);
  const [rangeValue, setRangeValue] = useState([20, 75]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-8 gap-10">
      {/* Single value slider */}
      <div className="w-full max-w-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
            Volume
          </span>
          <span className="text-sm font-mono text-violet-400">
            {singleValue[0]}%
          </span>
        </div>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={singleValue}
          onValueChange={setSingleValue}
          max={100}
          step={1}
        >
          <Slider.Track className="relative grow rounded-full h-1.5 bg-white/10">
            <Slider.Range className="absolute rounded-full h-full bg-gradient-to-r from-violet-600 to-violet-400" />
          </Slider.Track>
          <Slider.Thumb className="block w-5 h-5 rounded-full bg-violet-500 border-2 border-violet-300 shadow-lg shadow-violet-500/30 hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-colors cursor-grab active:cursor-grabbing" />
        </Slider.Root>
      </div>

      {/* Dual range slider */}
      <div className="w-full max-w-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
            Price Range
          </span>
          <span className="text-sm font-mono text-violet-400">
            ${rangeValue[0]} &ndash; ${rangeValue[1]}
          </span>
        </div>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={rangeValue}
          onValueChange={setRangeValue}
          max={100}
          step={1}
          minStepsBetweenThumbs={5}
        >
          <Slider.Track className="relative grow rounded-full h-1.5 bg-white/10">
            <Slider.Range className="absolute rounded-full h-full bg-gradient-to-r from-violet-600 to-violet-400" />
          </Slider.Track>
          <Slider.Thumb className="block w-5 h-5 rounded-full bg-violet-500 border-2 border-violet-300 shadow-lg shadow-violet-500/30 hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-colors cursor-grab active:cursor-grabbing" />
          <Slider.Thumb className="block w-5 h-5 rounded-full bg-violet-500 border-2 border-violet-300 shadow-lg shadow-violet-500/30 hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-colors cursor-grab active:cursor-grabbing" />
        </Slider.Root>
      </div>
    </div>
  );
}
