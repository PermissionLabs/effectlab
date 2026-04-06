"use client";

import { TypeAnimation } from "react-type-animation";

export default function ReactTypeAnimationDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <TypeAnimation
        sequence={[
          "Build beautiful UIs",
          2000,
          "Build performant apps",
          2000,
          "Build accessible experiences",
          2000,
          "Build the future of the web",
          2000,
        ]}
        wrapper="span"
        speed={40}
        repeat={Infinity}
        className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
        cursor={true}
        style={{ display: "inline-block" }}
      />
    </div>
  );
}
