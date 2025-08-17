import { WorldNewsPost } from "@/components/Section/WorldNewsPost";
import { ReviewsSection } from "@/components/Section/ReviewsSection";
import GadgetAndLaptopSections from "@/components/Section/GadgetAndLaptopSection";
import { LatestSection } from "@/components/Section/LatestSection";
import { VideosSection } from "@/components/Section/VideosSection";
import PodcastsSections from "@/components/Section/PodcastsSections";
export default function Home() {
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
      <div>
        
      </div>
    </main>
  );
}
