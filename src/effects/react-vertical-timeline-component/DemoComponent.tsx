"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// CSS moved to globals.css to avoid build script errors

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function ReactVerticalTimelineComponentDemo() {
  return (
    <div className="w-full h-full bg-[#050510] rounded-2xl overflow-y-auto p-4">
      <VerticalTimeline lineColor="rgba(139, 92, 246, 0.3)" layout="1-column-left">
        <VerticalTimelineElement
          contentStyle={{ background: "rgba(139, 92, 246, 0.15)", color: "#e2e8f0", border: "1px solid rgba(139, 92, 246, 0.3)", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid rgba(139, 92, 246, 0.3)" }}
          date="2024 Q1"
          dateClassName="!text-white/40"
          iconStyle={{ background: "#8b5cf6", color: "#fff", boxShadow: "0 0 0 4px rgba(139, 92, 246, 0.3)" }}
          icon={<RocketIcon />}
        >
          <h3 className="!text-white !font-semibold !text-sm">Project Launch</h3>
          <p className="!text-white/60 !text-xs !mt-1 !font-normal">Initial release with core features and documentation.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgba(59, 130, 246, 0.15)", color: "#e2e8f0", border: "1px solid rgba(59, 130, 246, 0.3)", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid rgba(59, 130, 246, 0.3)" }}
          date="2024 Q2"
          dateClassName="!text-white/40"
          iconStyle={{ background: "#3b82f6", color: "#fff", boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.3)" }}
          icon={<CodeIcon />}
        >
          <h3 className="!text-white !font-semibold !text-sm">API Redesign</h3>
          <p className="!text-white/60 !text-xs !mt-1 !font-normal">Complete rewrite of the API layer for better performance.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgba(245, 158, 11, 0.15)", color: "#e2e8f0", border: "1px solid rgba(245, 158, 11, 0.3)", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid rgba(245, 158, 11, 0.3)" }}
          date="2024 Q3"
          dateClassName="!text-white/40"
          iconStyle={{ background: "#f59e0b", color: "#fff", boxShadow: "0 0 0 4px rgba(245, 158, 11, 0.3)" }}
          icon={<StarIcon />}
        >
          <h3 className="!text-white !font-semibold !text-sm">1K Stars Milestone</h3>
          <p className="!text-white/60 !text-xs !mt-1 !font-normal">Community growth milestone with 1,000 GitHub stars.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgba(16, 185, 129, 0.15)", color: "#e2e8f0", border: "1px solid rgba(16, 185, 129, 0.3)", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid rgba(16, 185, 129, 0.3)" }}
          date="2024 Q4"
          dateClassName="!text-white/40"
          iconStyle={{ background: "#10b981", color: "#fff", boxShadow: "0 0 0 4px rgba(16, 185, 129, 0.3)" }}
          icon={<CheckIcon />}
        >
          <h3 className="!text-white !font-semibold !text-sm">Stable Release</h3>
          <p className="!text-white/60 !text-xs !mt-1 !font-normal">Production-ready v2.0 with full TypeScript support.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
