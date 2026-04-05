"use client";

import { Toaster, toast } from "react-hot-toast";

export default function ReactHotToastInner() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1a1a2e",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
            fontSize: "14px",
          },
        }}
      />
      <p className="text-white/60 text-xs uppercase tracking-widest mb-2">
        Click to trigger toasts
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => toast.success("Action completed successfully!")}
          className="px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 text-sm font-medium transition-all border border-emerald-500/20 active:scale-95"
        >
          Success
        </button>
        <button
          onClick={() => toast.error("Something went wrong.")}
          className="px-4 py-2.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-400 text-sm font-medium transition-all border border-red-500/20 active:scale-95"
        >
          Error
        </button>
        <button
          onClick={() =>
            toast.promise(
              new Promise((resolve) => setTimeout(resolve, 2000)),
              { loading: "Loading...", success: "Done!", error: "Failed!" }
            )
          }
          className="px-4 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 text-sm font-medium transition-all border border-amber-500/20 active:scale-95"
        >
          Loading
        </button>
        <button
          onClick={() =>
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-sm w-full bg-[#1a1a2e] border border-white/10 rounded-xl shadow-lg pointer-events-auto flex items-center gap-3 px-4 py-3`}
              >
                <span className="text-2xl">🎉</span>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">Custom Toast</p>
                  <p className="text-white/50 text-xs">With rich content inside!</p>
                </div>
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="text-white/40 hover:text-white/80 text-xs"
                >
                  Close
                </button>
              </div>
            ))
          }
          className="px-4 py-2.5 rounded-xl bg-violet-500/15 hover:bg-violet-500/25 text-violet-400 text-sm font-medium transition-all border border-violet-500/20 active:scale-95"
        >
          Custom
        </button>
      </div>
    </div>
  );
}
