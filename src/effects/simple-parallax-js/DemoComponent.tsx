"use client";

import SimpleParallax from "simple-parallax-js";

export default function SimpleParallaxDemo() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="flex flex-col gap-6 p-6" style={{ minHeight: "800px" }}>
        <p className="text-center text-white/40 text-xs">Scroll to see parallax</p>

        <SimpleParallax scale={1.4} orientation="down" overflow>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23667eea'/%3E%3Cstop offset='1' stop-color='%23764ba2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='400' height='200' rx='12'/%3E%3Ctext x='200' y='108' text-anchor='middle' fill='white' font-size='20' font-family='sans-serif' opacity='0.6'%3Eorientation: down%3C/text%3E%3C/svg%3E"
            alt="Parallax layer 1"
            className="w-full h-auto block rounded-xl"
          />
        </SimpleParallax>

        <SimpleParallax scale={1.6} orientation="up" overflow delay={0.4}>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%2343e97b'/%3E%3Cstop offset='1' stop-color='%2338f9d7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='400' height='200' rx='12'/%3E%3Ctext x='200' y='108' text-anchor='middle' fill='white' font-size='20' font-family='sans-serif' opacity='0.6'%3Eorientation: up%3C/text%3E%3C/svg%3E"
            alt="Parallax layer 2"
            className="w-full h-auto block rounded-xl"
          />
        </SimpleParallax>

        <SimpleParallax scale={1.3} orientation="left" overflow>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23fa709a'/%3E%3Cstop offset='1' stop-color='%23fee140'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='400' height='200' rx='12'/%3E%3Ctext x='200' y='108' text-anchor='middle' fill='white' font-size='20' font-family='sans-serif' opacity='0.6'%3Eorientation: left%3C/text%3E%3C/svg%3E"
            alt="Parallax layer 3"
            className="w-full h-auto block rounded-xl"
          />
        </SimpleParallax>

        <div className="h-40" />
      </div>
    </div>
  );
}
