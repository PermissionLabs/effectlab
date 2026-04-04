export const usage = {
  install: "bun add sonner",
  tsx: `"use client";

import { Toaster, toast } from "sonner";

export default function ToastExample() {
  return (
    <div>
      <Toaster position="top-right" />

      <button onClick={() => toast.success("Saved successfully!")}>
        Success
      </button>

      <button onClick={() => toast.error("Something went wrong")}>
        Error
      </button>

      <button onClick={() => toast.info("Tip: you can drag to dismiss")}>
        Info
      </button>

      <button
        onClick={() =>
          toast.promise(fetch("/api/data"), {
            loading: "Fetching data...",
            success: "Data loaded!",
            error: "Failed to load",
          })
        }
      >
        Promise
      </button>
    </div>
  );
}`,
};
