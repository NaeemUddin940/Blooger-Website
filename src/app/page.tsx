"use client";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { DualScrollLayout } from "@/components/MainContentDualSection/DualScrollLayout";
export default function Home() {

  return (
    <main className="flex justify-center">
      <section className="w-5xl ">
        <HeroSection />

        <DualScrollLayout />
      </section>
    </main>
  );
}
