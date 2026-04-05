import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowToUse from "@/components/HowToUse";
import EffectGrid from "@/components/EffectGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-bg">
      <Header />
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 pt-10 pb-16">
        <HeroSection />
        <HowToUse />
        <EffectGrid />
      </main>
    </div>
  );
}
