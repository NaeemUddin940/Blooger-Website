"use client";
import { HeroSection } from "@/components/Section/HeroSection";
import { DualScrollLayout } from "@/components/MainContentDualSection/DualScrollLayout";
// import PostDetails from "@/app/post-details/page";
export default function Home() {
  return (
    <main className="flex justify-center">
      <section className="w-5xl px-2">
        <HeroSection />
        {/* <PostDetails /> */}
        <DualScrollLayout />
      </section>
    </main>
  );
}
