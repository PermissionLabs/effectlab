import Header from "@/components/Header";
import HeroTitle from "@/components/HeroTitle";
import EffectGrid from "@/components/EffectGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1 px-6 py-8 max-w-7xl mx-auto w-full">
        {/* Hero */}
        <div className="flex flex-col gap-3 mb-10">
          <HeroTitle />
          <p className="text-muted text-base max-w-xl">
            Browse stunning visual effects for your React projects. Preview live, search by description, and copy the code.
          </p>
        </div>

        <EffectGrid />
      </main>

      <footer className="border-t border-border px-6 py-4 text-center text-xs text-muted">
        EffectLab — Open source visual effect showcase
      </footer>
    </div>
  );
}
