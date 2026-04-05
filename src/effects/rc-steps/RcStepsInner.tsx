"use client";

import { useState } from "react";
import Steps from "rc-steps";

const steps = [
  { title: "Design", description: "UI/UX mockups" },
  { title: "Develop", description: "Build features" },
  { title: "Test", description: "QA & review" },
  { title: "Deploy", description: "Ship to prod" },
];

export default function RcStepsInner() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-6">
      <style>{`
        .rc-steps {
          width: 100%;
          max-width: 500px;
        }
        .rc-steps-item-title {
          color: rgba(255,255,255,0.5) !important;
          font-size: 13px !important;
          font-weight: 600 !important;
        }
        .rc-steps-item-description {
          color: rgba(255,255,255,0.3) !important;
          font-size: 11px !important;
        }
        .rc-steps-item-active .rc-steps-item-title,
        .rc-steps-item-finish .rc-steps-item-title {
          color: #fff !important;
        }
        .rc-steps-item-active .rc-steps-item-description,
        .rc-steps-item-finish .rc-steps-item-description {
          color: rgba(255,255,255,0.5) !important;
        }
        .rc-steps-item-icon {
          border-color: rgba(139,92,246,0.3) !important;
          background: transparent !important;
        }
        .rc-steps-item-icon .rc-steps-icon {
          color: rgba(255,255,255,0.4) !important;
          font-size: 12px !important;
        }
        .rc-steps-item-active .rc-steps-item-icon {
          border-color: #8b5cf6 !important;
          background: #8b5cf6 !important;
        }
        .rc-steps-item-active .rc-steps-item-icon .rc-steps-icon {
          color: #fff !important;
        }
        .rc-steps-item-finish .rc-steps-item-icon {
          border-color: #8b5cf6 !important;
          background: rgba(139,92,246,0.2) !important;
        }
        .rc-steps-item-finish .rc-steps-item-icon .rc-steps-icon {
          color: #8b5cf6 !important;
        }
        .rc-steps-item-tail::after {
          background: rgba(139,92,246,0.2) !important;
        }
        .rc-steps-item-finish .rc-steps-item-tail::after {
          background: #8b5cf6 !important;
        }
      `}</style>

      <Steps current={current} items={steps} />

      <div className="flex gap-3">
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <button
          onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))}
          disabled={current === steps.length - 1}
          className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
