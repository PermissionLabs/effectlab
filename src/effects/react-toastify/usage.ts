export const usage = {
  install: "bun add react-toastify",
  tsx: `"use client";

import { ToastContainer, toast } from "react-toastify";
// Import CSS in your globals.css: @import "react-toastify/dist/ReactToastify.css";

export default function ToastifyExample() {
  return (
    <div className="p-8 flex gap-3">
      <ToastContainer position="top-right" theme="dark" />
      <button onClick={() => toast.success("Saved!")}>Success</button>
      <button onClick={() => toast.error("Failed!")}>Error</button>
      <button onClick={() => toast.info("FYI")}>Info</button>
      <button
        onClick={() =>
          toast.promise(
            new Promise((res) => setTimeout(res, 2000)),
            { pending: "Loading...", success: "Done!", error: "Error" }
          )
        }
      >
        Promise
      </button>
    </div>
  );
}`,
};
