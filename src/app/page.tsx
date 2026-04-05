import Header from "@/components/Header";
import EffectGrid from "@/components/EffectGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-bg">
      <Header />
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 pt-10 pb-16">
        {/* Hero — before.click style */}
        <div className="mb-10">
          <h1 className="text-[2.75rem] leading-[1.15] font-bold tracking-[-0.02em] text-fg">
            React visual effects
          </h1>
          <h2 className="text-[2.75rem] leading-[1.15] font-bold tracking-[-0.02em] text-fg/30">
            & animation libraries.
          </h2>
          <p className="mt-4 text-[15px] text-muted leading-relaxed max-w-lg">
            Browse curated visual effects from the best React libraries. Preview live, copy code, and paste into your project.
          </p>
        </div>

        <EffectGrid />
      </main>
    </div>
  );
}
