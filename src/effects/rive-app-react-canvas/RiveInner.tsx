"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useState } from "react";

export default function RiveInner() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const { RiveComponent } = useRive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    stateMachines: "bumpy",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    onLoad: () => setLoaded(true),
    onLoadError: () => setError(true),
  });

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white/30 text-xs">Failed to load .riv</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-8 h-8 rounded-full border-2 border-white/10 border-t-purple-500/60"
            style={{ animation: "spin 1s linear infinite" }}
          />
        </div>
      )}
      <RiveComponent
        style={{
          width: "100%",
          height: "100%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <p className="text-white/20 text-[10px] tracking-wider uppercase">
          interactive · rive
        </p>
      </div>
    </div>
  );
}
