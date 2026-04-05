"use client";

import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

function BuggyComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error("Something went wrong in this component!");
  }
  return (
    <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
        <span className="text-emerald-400 text-lg">✓</span>
      </div>
      <p className="text-emerald-400 text-sm font-medium">Component is healthy</p>
      <p className="text-white/40 text-xs text-center">
        Click the button below to trigger an error
      </p>
    </div>
  );
}

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-red-500/10 border border-red-500/20">
      <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
        <span className="text-red-400 text-lg">✕</span>
      </div>
      <p className="text-red-400 text-sm font-medium">Something went wrong</p>
      <p className="text-white/40 text-xs text-center font-mono max-w-xs">
        {error.message}
      </p>
      <button
        onClick={resetErrorBoundary}
        className="mt-2 px-4 py-2 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-400 text-xs font-medium transition-all border border-red-500/20 active:scale-95"
      >
        Try Again
      </button>
    </div>
  );
}

export default function ReactErrorBoundaryDemo() {
  const [shouldThrow, setShouldThrow] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-5">
      <p className="text-white/60 text-xs uppercase tracking-widest">
        Error Boundary with Fallback UI
      </p>
      <div className="w-full max-w-sm">
        <ErrorBoundary
          fallback={<ErrorFallback error={new Error("test")} resetErrorBoundary={() => setShouldThrow(false)} />}
          onReset={() => setShouldThrow(false)}
          resetKeys={[shouldThrow]}
        >
          <BuggyComponent shouldThrow={shouldThrow} />
        </ErrorBoundary>
      </div>
      <button
        onClick={() => setShouldThrow(true)}
        className="px-5 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 text-sm font-medium transition-all border border-amber-500/20 active:scale-95"
      >
        Trigger Error
      </button>
    </div>
  );
}
