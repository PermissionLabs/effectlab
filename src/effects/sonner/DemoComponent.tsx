"use client";

import { Toaster, toast } from "sonner";

export default function SonnerDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-6">
      <Toaster
        theme="dark"
        position="top-center"
        toastOptions={{
          style: {
            background: "#1a1a2e",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
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
          onClick={() => toast.info("Here is some useful info.")}
          className="px-4 py-2.5 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-400 text-sm font-medium transition-all border border-blue-500/20 active:scale-95"
        >
          Info
        </button>
        <button
          onClick={() =>
            toast.promise(
              new Promise((resolve) => setTimeout(resolve, 2000)),
              {
                loading: "Loading...",
                success: "Done!",
                error: "Failed!",
              }
            )
          }
          className="px-4 py-2.5 rounded-xl bg-violet-500/15 hover:bg-violet-500/25 text-violet-400 text-sm font-medium transition-all border border-violet-500/20 active:scale-95"
        >
          Promise
        </button>
      </div>
    </div>
  );
}
