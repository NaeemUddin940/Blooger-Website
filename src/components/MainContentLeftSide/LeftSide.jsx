import { WorldNewsPost } from "../Section/WorldNewsPost";
import { ReviewsSection } from "@/components/Section/ReviewsSection";
import  GadgetAndLaptopSections from "@/components/Section/GadgetAndLaptopSection";


export default function LeftSide() {
  return (
    <section>
      <WorldNewsPost />

      <ReviewsSection />

      <GadgetAndLaptopSections/>


    </section>
  );
}
