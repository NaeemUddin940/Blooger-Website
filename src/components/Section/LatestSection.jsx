import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import { posts } from "@/Data/db";
import HorizontalPostBigCard from "@/components/PostCard/HorizontalPostBigCard";

// Main LatestSection component
export const LatestSection = () => {
  const latestSection = posts.filter((post) => post.isLatest);
  return (
    <div>
      {/* Header section */}
      <ContentHeaderAndViewAll
        HeaderTitle={"Latest Posts"}
        path={`/all-posts/latest`}
      />

      {/* List of articles */}
      <div className="flex flex-col gap-4">
        {latestSection.map((post) => (
          // <ArticleCard  />
          <HorizontalPostBigCard key={post.id} post={post} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-gray-800 cursor-pointer hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
};
