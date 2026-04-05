"use client";

import { SnackbarProvider, enqueueSnackbar } from "notistack";

function NotificationButtons() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-6">
      <p className="text-white/60 text-xs uppercase tracking-widest mb-2">
        Click to trigger stacked notifications
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => enqueueSnackbar("Action completed successfully!", { variant: "success" })}
          className="px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 text-sm font-medium transition-all border border-emerald-500/20 active:scale-95"
        >
          Success
        </button>
        <button
          onClick={() => enqueueSnackbar("Something went wrong!", { variant: "error" })}
          className="px-4 py-2.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-400 text-sm font-medium transition-all border border-red-500/20 active:scale-95"
        >
          Error
        </button>
        <button
          onClick={() => enqueueSnackbar("Please check your input.", { variant: "warning" })}
          className="px-4 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 text-sm font-medium transition-all border border-amber-500/20 active:scale-95"
        >
          Warning
        </button>
        <button
          onClick={() => enqueueSnackbar("Here is some useful info.", { variant: "info" })}
          className="px-4 py-2.5 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-400 text-sm font-medium transition-all border border-blue-500/20 active:scale-95"
        >
          Info
        </button>
      </div>
    </div>
  );
}

export default function NotistackInner() {
  return (
    <div className="w-full h-full bg-[#050510] rounded-2xl">
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
      >
        <NotificationButtons />
      </SnackbarProvider>
    </div>
  );
}
