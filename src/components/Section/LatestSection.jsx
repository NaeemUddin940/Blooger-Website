"use client";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import HorizontalPostBigCard from "@/components/PostCard/HorizontalPostBigCard";
import { useLoadMore } from "@/Hooks/useLoadMore.js";
import { Button } from "../ui/button";
import { useBlogContext } from "@/context/BlogContext";

export const LatestSection = () => {
  const { allposts } = useBlogContext();
  const latestPost = allposts.filter((post) => post.status === "latest");
  const { post, hasMore, loadMore } = useLoadMore(latestPost, 4, 4);

  return (
    <div>
      {/* Header section */}
      <ContentHeaderAndViewAll
        HeaderTitle={"Latest Posts"}
        path={`/all-posts/latest`}
      />

      {/* List of articles */}
      <div className="flex flex-col gap-4">
        {post.map((post) => (
          <HorizontalPostBigCard key={post.id} post={post} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-4">
        {hasMore && <Button className="cursor-pointer" onClick={loadMore}>Load More</Button>}
      </div>
    </div>
  );
};
