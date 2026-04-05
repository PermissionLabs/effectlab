"use client";

import { useTransitionState } from "react-transition-state";

export default function ReactTransitionStateDemo() {
  const [state, toggle] = useTransitionState({
    timeout: 500,
    preEnter: true,
    mountOnEnter: true,
    unmountOnExit: true,
  });

  const [state2, toggle2] = useTransitionState({
    timeout: 600,
    preEnter: true,
    mountOnEnter: true,
    unmountOnExit: true,
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-6">
      {/* Status indicator */}
      <div className="flex items-center gap-3 text-xs font-mono">
        <span className="text-white/40">Status:</span>
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${
            state.status === "entered"
              ? "bg-emerald-500/20 text-emerald-400"
              : state.status === "exiting"
                ? "bg-amber-500/20 text-amber-400"
                : state.status === "entering" || state.status === "preEnter"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-white/10 text-white/40"
          }`}
        >
          {state.status}
        </span>
      </div>

      {/* Transition cards area */}
      <div className="relative w-full max-w-sm h-48 flex items-center justify-center">
        {state.isMounted && (
          <div
            className="absolute w-full max-w-xs p-6 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/30 backdrop-blur-sm"
            style={{
              opacity:
                state.status === "preEnter" || state.status === "exiting"
                  ? 0
                  : 1,
              transform:
                state.status === "preEnter" || state.status === "exiting"
                  ? "translateY(20px) scale(0.95)"
                  : "translateY(0) scale(1)",
              transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <h3 className="text-white font-semibold text-lg mb-2">
              Transition Card
            </h3>
            <p className="text-white/60 text-sm">
              This card enters with a fade + slide up animation and exits with the reverse.
            </p>
          </div>
        )}

        {state2.isMounted && (
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30"
            style={{
              opacity:
                state2.status === "preEnter" || state2.status === "exiting"
                  ? 0
                  : 1,
              transform:
                state2.status === "preEnter" || state2.status === "exiting"
                  ? "translate(-50%, 10px)"
                  : "translate(-50%, 0)",
              transition: "all 600ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <p className="text-emerald-300 text-xs text-center">Nested element</p>
          </div>
        )}

        {!state.isMounted && !state2.isMounted && (
          <p className="text-white/20 text-sm">Click toggle to show cards</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => {
            toggle();
            toggle2();
          }}
          className="px-5 py-2.5 rounded-lg bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 text-violet-300 text-sm font-medium transition-colors"
        >
          {state.status === "entered" ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
