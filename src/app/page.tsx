"use client";
import { WorldNewsPost } from "@/components/Section/WorldNewsPost";
import { ReviewsSection } from "@/components/Section/ReviewsSection";
import GadgetAndLaptopSections from "@/components/Section/GadgetAndLaptopSection";
import { LatestSection } from "@/components/Section/LatestSection";
import { VideosSection } from "@/components/Section/VideosSection";
import PodcastsSections from "@/components/Section/PodcastsSections";
import { useBlogContext } from "@/context/BlogContext";

export default function Home() {
  const { allposts } = useBlogContext();
  console.log(allposts);

  return (
    <main className="px-2 lg:px-0">
      <section>
        <WorldNewsPost />

        <ReviewsSection />

        <GadgetAndLaptopSections />

        <LatestSection />

        <VideosSection />

        <PodcastsSections />
      </section>
    </main>
  );
}
