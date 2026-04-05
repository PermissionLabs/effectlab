"use client";

import * as Dialog from "@radix-ui/react-dialog";

export default function RadixUiReactDialogDemo() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-4">
      <style>{`
        @keyframes dialog-overlay-show {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes dialog-content-show {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.92); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes dialog-overlay-hide {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes dialog-content-hide {
          from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          to { opacity: 0; transform: translate(-50%, -50%) scale(0.92); }
        }
      `}</style>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="px-6 py-3 rounded-xl bg-violet-500/15 hover:bg-violet-500/25 text-violet-400 text-sm font-medium transition-all border border-violet-500/20 active:scale-95 cursor-pointer">
            Open Dialog
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            style={{
              animation: "dialog-overlay-show 200ms ease-out",
            }}
          />
          <Dialog.Content
            className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-md rounded-2xl bg-[#0f0f1a] border border-white/10 p-6 shadow-2xl focus:outline-none"
            style={{
              animation: "dialog-content-show 250ms ease-out",
            }}
          >
            <Dialog.Title className="text-lg font-semibold text-white">
              Edit Profile
            </Dialog.Title>
            <Dialog.Description className="text-sm text-white/50 mt-1">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </Dialog.Description>

            <div className="mt-5 space-y-4">
              <fieldset className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium text-white/60 uppercase tracking-wider"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  defaultValue="John Doe"
                  className="h-10 rounded-lg bg-white/5 border border-white/10 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium text-white/60 uppercase tracking-wider"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  defaultValue="john@example.com"
                  className="h-10 rounded-lg bg-white/5 border border-white/10 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                />
              </fieldset>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Dialog.Close asChild>
                <button className="px-4 py-2 rounded-lg text-sm text-white/60 hover:text-white/80 hover:bg-white/5 transition-colors cursor-pointer">
                  Cancel
                </button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors cursor-pointer">
                  Save changes
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
