import { WorldNewsPost } from "../Section/WorldNewsPost";
import { ReviewsSection } from "@/components/Section/ReviewsSection";
import GadgetAndLaptopSections from "@/components/Section/GadgetAndLaptopSection";
import { LatestSection } from "@/components/Section/LatestSection";
import { VideosSection } from "@/components/Section/VideosSection";

export default function LeftSide() {
  return (
    <section>
      <WorldNewsPost />

      <ReviewsSection />

      <GadgetAndLaptopSections />

      <LatestSection />

      <VideosSection />
    </section>
  );
}
