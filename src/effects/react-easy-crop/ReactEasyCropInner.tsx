"use client";

import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import type { Area } from "react-easy-crop";

const GRADIENT_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%238b5cf6'/%3E%3Cstop offset='50%25' stop-color='%23ec4899'/%3E%3Cstop offset='100%25' stop-color='%23f59e0b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23g1)'/%3E%3Ccircle cx='200' cy='200' r='80' fill='rgba(255,255,255,0.15)'/%3E%3Ccircle cx='120' cy='100' r='40' fill='rgba(255,255,255,0.1)'/%3E%3Ccircle cx='300' cy='300' r='50' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E";

export default function ReactEasyCropInner() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);

  const onCropComplete = useCallback(
    (_: Area, croppedAreaPixels: Area) => {
      setCroppedArea(croppedAreaPixels);
    },
    []
  );

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
        Drag to crop, scroll to zoom
      </p>
      <div className="relative w-full max-w-sm h-64 rounded-xl overflow-hidden border border-white/10">
        <Cropper
          image={GRADIENT_IMAGE}
          crop={crop}
          zoom={zoom}
          aspect={16 / 9}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: { borderRadius: "0.75rem" },
          }}
        />
      </div>
      <div className="flex items-center gap-3 mt-4 w-full max-w-sm">
        <span className="text-white/30 text-xs">Zoom</span>
        <input
          type="range"
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
          className="flex-1 accent-violet-500 h-1"
        />
        <span className="text-white/50 text-xs font-mono w-10 text-right">
          {zoom.toFixed(1)}x
        </span>
      </div>
      {croppedArea && (
        <p className="text-white/20 text-[10px] mt-2 font-mono">
          {croppedArea.width}x{croppedArea.height}px
        </p>
      )}
    </div>
  );
}
