import ContentHeaderAndViewAll from "@/components/ui/ContentHeaderAndViewAll";
import { HorizontalPostSmallCard } from "../PostCard/HorizontalPostSmallCard";
import Link from "next/link";
import { posts } from "@/Data/db";

export const WorldNewsPost = () => {
  const HealthPosts = posts.filter((post) => post.category === "Health");
  const featuredPost = HealthPosts.filter((post) => post.isFeatured);
  const HealthNormalPosts = HealthPosts.filter((post) => !post.isFeatured);

  return (
    <div>
      <ContentHeaderAndViewAll
        HeaderTitle="World News"
        path={`/all-posts/health`}
      />

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {/* Featured Article section */}
        {featuredPost.map((post) => (
          // <FeaturedCard key={post.id} post={post} />
          <Link
            href={`/${post.category}/${post.id}`}
            key={post.id}
            className="lg:col-span-2 py-2 hover:rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-300  ease-in-out overflow-hidden flex flex-col">
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              {/* Tag over the image */}
              <span className="absolute bottom-4 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <div className="px-2 flex-1 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl mt-5 md:text-2xl line-clamp-2 hover:text-teal-400 font-extrabold leading-tight text-foreground">
                  {post.title}
                </h1>
                <p className="text-sm text-primary mt-2">
                  by{" "}
                  <span className="text-teal-400 font-medium">
                    {post.author}
                  </span>{" "}
                  {post.date}
                </p>
                <p className="text-primary text-base mt-4">
                  {post.description}
                </p>
              </div>
            </div>
          </Link>
        ))}

        {/* Side Articles List */}
        <div className="lg:col-span-2 flex flex-col gap-4 p-2">
          {HealthNormalPosts.map((post) => (
            <HorizontalPostSmallCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
