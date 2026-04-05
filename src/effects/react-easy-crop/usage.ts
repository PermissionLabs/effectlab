export const usage = {
  install: "bun add react-easy-crop",
  tsx: `"use client";

import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import type { Area } from "react-easy-crop";

export default function ImageCropper() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      console.log("Cropped pixels:", croppedAreaPixels);
    },
    []
  );

  return (
    <div style={{ position: "relative", width: 400, height: 300 }}>
      <Cropper
        image="/your-image.jpg"
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
    </div>
  );
}`,
};
