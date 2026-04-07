"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LottiefilesDotlottieReactDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <DotLottieReact
        src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie"
        autoplay
        loop
        style={{ width: "70%", height: "70%" }}
      />
    </div>
  );
}
