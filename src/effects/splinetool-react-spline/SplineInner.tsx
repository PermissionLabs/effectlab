"use client";

import Spline from "@splinetool/react-spline";

export default function SplineInner() {
  return (
    <div className="w-full h-full relative">
      <Spline
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <p className="text-white/20 text-[10px] tracking-wider uppercase">
          interactive · 3d
        </p>
      </div>
    </div>
  );
}
