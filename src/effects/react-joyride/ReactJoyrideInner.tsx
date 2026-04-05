"use client";

import { useState } from "react";
import { Joyride, STATUS, type Step } from "react-joyride";

const steps: Step[] = [
  {
    target: ".joyride-step-1",
    content: "This is your navigation bar. Use it to move between sections.",
    placement: "bottom",
  },
  {
    target: ".joyride-step-2",
    content: "Here you can see your recent activity and stats at a glance.",
    placement: "bottom",
  },
  {
    target: ".joyride-step-3",
    content: "Click here to create something new. Get started right away!",
    placement: "left",
  },
];

export default function ReactJoyrideInner() {
  const [run, setRun] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <Joyride
        steps={steps}
        run={run}
        continuous
        options={{
          showProgress: true,
          buttons: ["back", "close", "primary", "skip"],
          arrowColor: "#1a1a2e",
          backgroundColor: "#1a1a2e",
          primaryColor: "#8b5cf6",
          textColor: "#e2e8f0",
          zIndex: 1000,
        }}
        onEvent={(data) => {
          if (data.status === STATUS.FINISHED || data.status === STATUS.SKIPPED) {
            setRun(false);
          }
        }}
        styles={{
          tooltip: {
            borderRadius: 12,
            fontSize: 14,
          },
          buttonPrimary: {
            borderRadius: 8,
            padding: "8px 16px",
          },
          buttonBack: {
            color: "#94a3b8",
          },
        }}
      />

      {/* Mini UI mockup */}
      <div className="w-full max-w-md rounded-xl border border-white/10 overflow-hidden">
        {/* Nav bar */}
        <div className="joyride-step-1 flex items-center gap-3 px-4 py-3 bg-[#0a0a1a] border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-violet-500" />
          <span className="text-white/70 text-sm font-medium">AppName</span>
          <div className="flex-1" />
          <div className="flex gap-2">
            {["Home", "Docs", "Blog"].map((t) => (
              <span key={t} className="text-white/40 text-xs px-2 py-1 rounded hover:bg-white/5 cursor-pointer">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Activity area */}
        <div className="joyride-step-2 px-4 py-4 bg-[#0d0d20]">
          <span className="text-white/50 text-xs uppercase tracking-wider">Recent Activity</span>
          <div className="mt-2 flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1 h-10 rounded-lg bg-white/5 border border-white/5" />
            ))}
          </div>
        </div>

        {/* Action button */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a1a] border-t border-white/5">
          <span className="text-white/30 text-xs">3 items total</span>
          <button className="joyride-step-3 px-3 py-1.5 rounded-lg bg-violet-500/20 text-violet-400 text-xs font-medium border border-violet-500/30">
            + New Item
          </button>
        </div>
      </div>

      <button
        onClick={() => setRun(true)}
        className="px-5 py-2.5 rounded-xl bg-violet-500/15 hover:bg-violet-500/25 text-violet-400 text-sm font-medium transition-all border border-violet-500/20 active:scale-95"
      >
        Start Tour
      </button>
    </div>
  );
}
