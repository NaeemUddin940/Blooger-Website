import { WorldNewsPost } from "../Section/WorldNewsPost";
import { ReviewsSection } from "@/components/Section/ReviewsSection";

export default function LeftSide() {
  return (
    <section>
      <WorldNewsPost />

      <ReviewsSection />
    </section>
  );
}
