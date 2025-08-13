"use client";
import { HeroSection } from "@/components/Section/HeroSection";
import { DualScrollLayout } from "@/components/MainContentDualSection/DualScrollLayout";
export default function Home() {

  return (
    <main className="flex justify-center">
      <section className="w-5xl px-2">
        <HeroSection />

        <DualScrollLayout />
      </section>
    </main>
  );
}
