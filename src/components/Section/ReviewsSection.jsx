import React from "react";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import { posts } from "@/Data/db";
import FeaturedCard from "../PostCard/FeaturedCard";
import { useBlogContext } from "@/context/BlogContext";

// Main ReviewsSection component
export const ReviewsSection = () => {
  const { allposts, category } = useBlogContext();
  const Reviews = allposts
    .filter((post) => post.category === category[1]?.title)
    .slice(0, 3);
  return (
    <div>
      {/* Header section */}
      <ContentHeaderAndViewAll
        HeaderTitle={category[1]?.title}
        path={`/all-posts/${category[1]?.title}`}
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
