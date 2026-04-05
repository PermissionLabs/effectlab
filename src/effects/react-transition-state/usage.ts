export const usage = {
  install: "bun add react-transition-state",
  tsx: `"use client";

import { useTransitionState } from "react-transition-state";

export default function TransitionExample() {
  const [state, toggle] = useTransitionState({
    timeout: 500,
    preEnter: true,
    mountOnEnter: true,
    unmountOnExit: true,
  });

  return (
    <div className="p-8">
      <button
        onClick={toggle}
        className="px-4 py-2 rounded bg-violet-600 text-white mb-4"
      >
        {state.status === "entered" ? "Hide" : "Show"}
      </button>

      {state.isMounted && (
        <div
          style={{
            opacity:
              state.status === "preEnter" || state.status === "exiting"
                ? 0
                : 1,
            transform:
              state.status === "preEnter" || state.status === "exiting"
                ? "translateY(20px)"
                : "translateY(0)",
            transition: "all 500ms ease",
          }}
        >
          <div className="p-6 rounded-xl bg-white/10 border border-white/20">
            <h3 className="text-lg font-semibold">Hello!</h3>
            <p className="text-sm opacity-60">
              I fade and slide in/out smoothly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}`,
};
