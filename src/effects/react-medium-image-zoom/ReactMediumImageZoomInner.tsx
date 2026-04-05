"use client";

import Zoom from "react-medium-image-zoom";

export default function ReactMediumImageZoomInner() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <Zoom>
        <div
          className="w-64 h-44 rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/20 cursor-zoom-in"
          role="img"
          aria-label="Gradient placeholder image"
        >
          <span className="text-white/80 text-lg font-semibold">
            EffectLab
          </span>
        </div>
      </Zoom>
      <p className="text-white/40 text-xs uppercase tracking-widest">
        Click to zoom
      </p>
    </div>
  );
}
