export const usage = {
  install: "bun add lottie-react",
  tsx: `"use client";

import Lottie from "lottie-react";
// Import your animation JSON (exported from After Effects via Bodymovin)
import animationData from "./my-animation.json";

export default function LottieExample() {
  return (
    <div className="w-64 h-64">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

// You can also control playback:
//
// import { useRef } from "react";
// import Lottie, { LottieRefCurrentProps } from "lottie-react";
//
// function ControlledLottie() {
//   const lottieRef = useRef<LottieRefCurrentProps>(null);
//
//   return (
//     <>
//       <Lottie lottieRef={lottieRef} animationData={animationData} />
//       <button onClick={() => lottieRef.current?.pause()}>Pause</button>
//       <button onClick={() => lottieRef.current?.play()}>Play</button>
//     </>
//   );
// }`,
};
