"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const COLORS = ["#8b5cf6", "#06b6d4", "#f43f5e", "#22c55e", "#f59e0b", "#ec4899"];

export default function GsapDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [playing, setPlaying] = useState(true);

  const buildTimeline = useCallback((container: HTMLDivElement) => {
    const boxes = container.querySelectorAll<HTMLElement>(".gsap-box");
    const label = container.querySelector<HTMLElement>(".gsap-label");

    const tl = gsap.timeline({
      onComplete: () => setPlaying(false),
    });

    // Reset
    tl.set(boxes, { opacity: 0, scale: 0, rotation: -180, y: 40 });
    tl.set(label, { opacity: 0, y: 10 });

    // Stagger boxes in
    tl.to(boxes, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    // Ripple scale pulse
    tl.to(boxes, {
      scale: 1.3,
      duration: 0.25,
      stagger: 0.06,
      ease: "power2.in",
    });
    tl.to(boxes, {
      scale: 1,
      duration: 0.25,
      stagger: 0.06,
      ease: "power2.out",
    });

    // Color shift — each box shifts to the next color
    tl.to(boxes, {
      duration: 0.4,
      stagger: 0.05,
      ease: "power1.inOut",
      backgroundColor: (_i: number, el: HTMLElement) => {
        const currentIdx = COLORS.indexOf(
          el.getAttribute("data-color") || COLORS[0]
        );
        return COLORS[(currentIdx + 2) % COLORS.length];
      },
    });

    // Rotate into a circle-ish formation
    tl.to(boxes, {
      rotation: 360,
      duration: 0.8,
      stagger: 0.04,
      ease: "elastic.out(1, 0.5)",
    });

    // Bounce down and back
    tl.to(boxes, {
      y: 20,
      duration: 0.3,
      stagger: 0.04,
      ease: "power2.in",
      yoyo: true,
      repeat: 1,
    });

    // Final settle with border radius morph
    tl.to(boxes, {
      borderRadius: "50%",
      rotation: 720,
      duration: 0.6,
      stagger: 0.06,
      ease: "power4.inOut",
    });
    tl.to(boxes, {
      borderRadius: "6px",
      duration: 0.4,
      stagger: 0.06,
      ease: "back.out(2)",
    });

    // Show label
    tl.to(label, {
      opacity: 0.5,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.3");

    return tl;
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;
    setPlaying(true);
    tlRef.current = buildTimeline(containerRef.current);
  }, { scope: containerRef });

  const handleReplay = () => {
    if (!containerRef.current) return;
    if (tlRef.current) {
      tlRef.current.kill();
    }
    setPlaying(true);
    tlRef.current = buildTimeline(containerRef.current);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col items-center justify-center gap-6 p-6 cursor-pointer select-none"
      onClick={handleReplay}
    >
      {/* Staggered boxes grid */}
      <div className="grid grid-cols-3 gap-3">
        {COLORS.map((color, i) => (
          <div
            key={i}
            className="gsap-box w-12 h-12 rounded-md opacity-0"
            data-color={color}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Replay hint */}
      <p className="gsap-label text-white/50 text-xs opacity-0">
        {playing ? "animating..." : "tap to replay"}
      </p>
    </div>
  );
}
