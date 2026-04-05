"use client";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="absolute top-3 right-3 flex gap-1 z-10">
      {[
        { label: "+", fn: () => zoomIn() },
        { label: "-", fn: () => zoomOut() },
        { label: "Reset", fn: () => resetTransform() },
      ].map((btn) => (
        <button
          key={btn.label}
          onClick={btn.fn}
          className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors border border-white/10"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

function GradientPattern() {
  return (
    <div className="w-[600px] h-[400px] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 via-fuchsia-500/30 to-amber-500/40 rounded-2xl" />
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-2 p-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/10 flex items-center justify-center"
            style={{
              background: `rgba(139, 92, 246, ${0.05 + (i % 6) * 0.03})`,
            }}
          >
            <span className="text-white/20 text-[10px] font-mono">
              {i + 1}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <span className="text-white/30 text-xs">Zoom me</span>
        </div>
      </div>
    </div>
  );
}

export default function ReactZoomPanPinchInner() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
        Scroll to zoom, drag to pan
      </p>
      <div className="relative w-full max-w-sm h-64 rounded-xl overflow-hidden border border-white/10">
        <TransformWrapper
          initialScale={0.6}
          minScale={0.3}
          maxScale={4}
          centerOnInit
        >
          <Controls />
          <TransformComponent
            wrapperStyle={{ width: "100%", height: "100%" }}
            contentStyle={{ width: "100%", height: "100%" }}
          >
            <GradientPattern />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
}
