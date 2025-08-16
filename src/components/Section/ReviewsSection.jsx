import React from "react";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import { posts } from "@/Data/db";
import FeaturedCard from "../PostCard/FeaturedCard";

// Main ReviewsSection component
export const ReviewsSection = () => {
  const Reviews = posts.filter((post) => post.category === "Reviews");
  return (
    <div>
      {/* Header section */}
      <ContentHeaderAndViewAll
        HeaderTitle={"Reviews"}
        path={`/all-posts/reviews`}
      />

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
        {Reviews.map((post) => (
          <FeaturedCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
