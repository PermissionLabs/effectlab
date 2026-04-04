"use client";

import { Drawer } from "vaul";

export default function VaulDemo() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/10 hover:border-white/20 active:scale-95">
            Open Drawer
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/60 z-40" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-2xl bg-[#111118] border-t border-white/10">
            <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-white/20" />
            <div className="p-6 pb-10 max-w-lg mx-auto w-full">
              <Drawer.Title className="text-white font-semibold text-lg mb-2">
                Vaul Drawer
              </Drawer.Title>
              <Drawer.Description className="text-white/50 text-sm mb-6">
                A smooth, spring-animated drawer built for React. Drag down to dismiss.
              </Drawer.Description>
              <div className="space-y-3">
                {["Profile Settings", "Notifications", "Appearance", "Log Out"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
