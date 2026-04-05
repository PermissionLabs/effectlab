export const usage = {
  install: "bun add @radix-ui/react-slider",
  tsx: `"use client";

import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

export default function SliderExample() {
  const [value, setValue] = useState([50]);
  const [range, setRange] = useState([25, 75]);

  return (
    <div className="space-y-8 max-w-sm mx-auto p-6">
      {/* Single slider */}
      <div>
        <p className="text-sm text-white/60 mb-2">Volume: {value[0]}%</p>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={value}
          onValueChange={setValue}
          max={100}
        >
          <Slider.Track className="relative grow rounded-full h-1.5 bg-white/10">
            <Slider.Range className="absolute rounded-full h-full bg-violet-500" />
          </Slider.Track>
          <Slider.Thumb className="block w-5 h-5 rounded-full bg-violet-500 border-2 border-violet-300 shadow-md" />
        </Slider.Root>
      </div>

      {/* Dual range slider */}
      <div>
        <p className="text-sm text-white/60 mb-2">
          Range: {range[0]} - {range[1]}
        </p>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={range}
          onValueChange={setRange}
          max={100}
          minStepsBetweenThumbs={5}
        >
          <Slider.Track className="relative grow rounded-full h-1.5 bg-white/10">
            <Slider.Range className="absolute rounded-full h-full bg-violet-500" />
          </Slider.Track>
          <Slider.Thumb className="block w-5 h-5 rounded-full bg-violet-500 border-2 border-violet-300" />
          <Slider.Thumb className="block w-5 h-5 rounded-full bg-violet-500 border-2 border-violet-300" />
        </Slider.Root>
      </div>
    </div>
  );
}`,
};
