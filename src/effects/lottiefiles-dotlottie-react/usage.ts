export const usage = {
  install: "bun add @lottiefiles/dotlottie-react",
  tsx: `"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LottieDemo() {
  return (
    <div style={{ width: 300, height: 300 }}>
      <DotLottieReact
        src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie"
        autoplay
        loop
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}`,
};
