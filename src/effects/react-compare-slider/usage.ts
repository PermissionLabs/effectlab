export const usage = {
  install: "bun add react-compare-slider",
  tsx: `"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function CompareSliderExample() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src="/before.jpg"
            alt="Before"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="/after.jpg"
            alt="After"
          />
        }
        style={{ width: "100%", height: 400 }}
      />
    </div>
  );
}`,
};
