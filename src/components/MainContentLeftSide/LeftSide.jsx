import { WorldNewsPost } from "../Section/WorldNewsPost";
import { ReviewsSection } from "@/components/Section/ReviewsSection";
import GadgetAndLaptopSections from "@/components/Section/GadgetAndLaptopSection";
import { LatestSection } from "@/components/Section/LatestSection";


export default function LeftSide() {
  return (
    <section>
      <WorldNewsPost />

      <ReviewsSection />

      <GadgetAndLaptopSections />

      <LatestSection />

     
    </section>
  );
}
