export const usage = {
  install: "bun add react-spinners",
  tsx: `"use client";

import { PulseLoader, BeatLoader, ClipLoader, RingLoader, BarLoader, MoonLoader } from "react-spinners";

export default function SpinnersShowcase() {
  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      <div className="flex flex-col items-center gap-2">
        <PulseLoader color="#8b5cf6" size={12} />
        <span className="text-sm text-gray-400">PulseLoader</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <BeatLoader color="#8b5cf6" size={12} />
        <span className="text-sm text-gray-400">BeatLoader</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ClipLoader color="#8b5cf6" size={40} />
        <span className="text-sm text-gray-400">ClipLoader</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <RingLoader color="#8b5cf6" size={50} />
        <span className="text-sm text-gray-400">RingLoader</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <BarLoader color="#8b5cf6" width={120} />
        <span className="text-sm text-gray-400">BarLoader</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <MoonLoader color="#8b5cf6" size={40} />
        <span className="text-sm text-gray-400">MoonLoader</span>
      </div>
    </div>
  );
}`,
};
