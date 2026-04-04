"use client";

import { PulseLoader, BeatLoader, ClipLoader, RingLoader, BarLoader, MoonLoader } from "react-spinners";

const spinners = [
  { name: "PulseLoader", component: <PulseLoader color="#8b5cf6" size={12} /> },
  { name: "BeatLoader", component: <BeatLoader color="#8b5cf6" size={12} /> },
  { name: "ClipLoader", component: <ClipLoader color="#8b5cf6" size={40} /> },
  { name: "RingLoader", component: <RingLoader color="#8b5cf6" size={50} /> },
  { name: "BarLoader", component: <BarLoader color="#8b5cf6" width={120} /> },
  { name: "MoonLoader", component: <MoonLoader color="#8b5cf6" size={40} /> },
];

export default function ReactSpinnersDemo() {
  return (
    <div className="flex items-center justify-center w-full h-full p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-lg">
        {spinners.map(({ name, component }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white/5 border border-white/10 p-5 min-h-[100px]"
          >
            <div className="h-12 flex items-center justify-center">
              {component}
            </div>
            <span className="text-white/50 text-xs font-mono">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
