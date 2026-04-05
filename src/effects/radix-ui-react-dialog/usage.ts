export const usage = {
  install: "bun add @radix-ui/react-dialog",
  tsx: `"use client";

import * as Dialog from "@radix-ui/react-dialog";

export default function DialogExample() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 bg-violet-600 text-white rounded-lg">
          Open Dialog
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-gray-900 border border-white/10 rounded-2xl p-6 shadow-xl">
          <Dialog.Title className="text-lg font-semibold text-white">
            Edit Profile
          </Dialog.Title>
          <Dialog.Description className="text-sm text-white/50 mt-1">
            Make changes to your profile here.
          </Dialog.Description>

          <div className="mt-4 space-y-3">
            <input
              placeholder="Name"
              className="w-full h-10 rounded-lg bg-white/5 border border-white/10 px-3 text-white text-sm"
            />
            <input
              placeholder="Email"
              className="w-full h-10 rounded-lg bg-white/5 border border-white/10 px-3 text-white text-sm"
            />
          </div>

          <div className="mt-5 flex justify-end gap-3">
            <Dialog.Close asChild>
              <button className="px-4 py-2 text-sm text-white/60 hover:text-white">
                Cancel
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button className="px-4 py-2 bg-violet-600 text-white text-sm rounded-lg">
                Save
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-white/40 hover:text-white" aria-label="Close">
              \u2715
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}`,
};
