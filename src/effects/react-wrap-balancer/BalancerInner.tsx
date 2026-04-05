"use client";

import Balancer from "react-wrap-balancer";

const sampleText =
  "React Wrap Balancer makes your titles look great by distributing text evenly across each line";

export default function BalancerInner() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-8 gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-widest text-red-400/70 font-medium">
            Without Balancer
          </span>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h2 className="text-xl font-bold text-white/90 leading-snug">
              {sampleText}
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-widest text-emerald-400/70 font-medium">
            With Balancer
          </span>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h2 className="text-xl font-bold text-white/90 leading-snug">
              <Balancer>{sampleText}</Balancer>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
