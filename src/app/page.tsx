import Header from "@/components/Header";
import EffectGrid from "@/components/EffectGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1 px-4 sm:px-6 pt-6 pb-12 max-w-[1440px] mx-auto w-full">
        <EffectGrid />
      </main>
    </div>
  );
}
