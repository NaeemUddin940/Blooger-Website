import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import { posts } from "@/Data/db";
import FeaturedCard from "../PostCard/FeaturedCard";

export default function PodcastsSections() {
  const podcastSection = posts.filter((post) => post.category === "Podcast").slice(0, 3);
  return (
    <div>
      <ContentHeaderAndViewAll HeaderTitle={"Podcast"} path={`/all-posts/podcast`} />
      <div className="lg:col-span-2 py-2 grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        {podcastSection.map((post) => (
          <FeaturedCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
