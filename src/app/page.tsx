import Header from "@/components/Header";
import EffectGrid from "@/components/EffectGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-bg">
      <Header />
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 py-8">
        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-[2.5rem] leading-tight font-bold tracking-tight text-white">
            React visual effects
          </h1>
          <h2 className="text-[2.5rem] leading-tight font-bold tracking-tight text-white/30">
            & animation libraries.
          </h2>
          <p className="mt-3 text-[15px] text-white/40 max-w-md">
            Browse curated effects from the best React libraries. Preview live, copy code, paste into your project.
          </p>
        </div>

        <EffectGrid />
      </main>
    </div>
  );
}
