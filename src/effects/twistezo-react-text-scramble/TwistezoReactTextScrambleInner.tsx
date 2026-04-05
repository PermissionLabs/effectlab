"use client";

import { TextScramble } from "@twistezo/react-text-scramble";

const phrases = ["EffectLab", "Visual Effects", "React Libraries"];

export default function TwistezoReactTextScrambleInner() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-8">
      <span className="font-mono text-4xl md:text-5xl font-bold text-emerald-400 tracking-tight">
        <TextScramble
          texts={phrases}
          letterSpeed={50}
          nextLetterSpeed={100}
          pauseTime={2000}
        />
      </span>
    </div>
  );
}
