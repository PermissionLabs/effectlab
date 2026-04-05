export const usage = {
  install: "bun add react-zoom-pan-pinch",
  tsx: `"use client";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="flex gap-2 mb-2">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>Reset</button>
    </div>
  );
}

export default function ZoomableViewer() {
  return (
    <TransformWrapper initialScale={1} minScale={0.5} maxScale={4}>
      <Controls />
      <TransformComponent>
        <img src="/your-image.jpg" alt="Zoomable content" />
      </TransformComponent>
    </TransformWrapper>
  );
}`,
};
