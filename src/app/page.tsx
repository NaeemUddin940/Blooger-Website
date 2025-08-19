"use client";
import { WorldNewsSection } from "@/components/Section/WorldNewsSection";
import { ReviewsSection } from "@/components/Section/ReviewsSection";
import GadgetAndLaptopSections from "@/components/Section/GadgetAndLaptopSection";
import { LatestSection } from "@/components/Section/LatestSection";
import { VideosSection } from "@/components/Section/VideosSection";
import PodcastsSections from "@/components/Section/PodcastsSections";



export default function Home() {
  return (
    <main className="px-2 lg:px-0">
      <section>
        <WorldNewsSection />

        <ReviewsSection />

        <GadgetAndLaptopSections />

        <LatestSection />

        <VideosSection />

        <PodcastsSections />
      </section>
    </main>
  );
}
