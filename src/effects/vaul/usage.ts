export const usage = {
  install: "bun add vaul",
  tsx: `"use client";

import { Drawer } from "vaul";

export default function DrawerExample() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button className="px-4 py-2 bg-white rounded-lg text-black">
          Open Drawer
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 rounded-t-2xl bg-white p-6">
          <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-gray-300" />
          <Drawer.Title className="text-lg font-semibold mb-2">
            Settings
          </Drawer.Title>
          <Drawer.Description className="text-gray-500">
            Drag down to dismiss this drawer.
          </Drawer.Description>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}`,
};
