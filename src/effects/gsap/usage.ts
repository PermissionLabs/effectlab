export const usage = {
  install: "bun add gsap @gsap/react",
  tsx: `"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function GsapExample() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.timeline()
      .from(".box", {
        opacity: 0,
        y: 40,
        rotation: -90,
        stagger: 0.15,
        ease: "back.out(1.7)",
        duration: 0.6,
      })
      .to(".box", {
        scale: 1.2,
        duration: 0.3,
        stagger: 0.08,
        yoyo: true,
        repeat: 1,
      });
  }, { scope: container });

  return (
    <div ref={container} className="flex gap-4 p-8">
      {["#8b5cf6", "#06b6d4", "#f43f5e"].map((c, i) => (
        <div key={i} className="box w-16 h-16 rounded-lg" style={{ backgroundColor: c }} />
      ))}
    </div>
  );
}`,
};
