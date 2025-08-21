import ContentHeaderAndViewAll from "@/components/ui/ContentHeaderAndViewAll";
import { HorizontalPostSmallCard } from "../PostCard/HorizontalPostSmallCard";
import Link from "next/link";
import { useBlogContext } from "@/context/BlogContext";
import Image from "next/image";

export const WorldNewsSection = () => {
  const { allposts, category } = useBlogContext();

  const categoryPost = allposts.filter(
    (post) => post.category === category[0].title
  );

  const featuredPosts = categoryPost.filter(
    (post) => post.status === "featured"
  );

  const featuredPost = featuredPosts.length > 0 ? featuredPosts[0] : null;

  const HealthNormalPosts = [
    ...featuredPosts.slice(1),
    ...categoryPost.filter((post) => post.status !== "featured"),
  ];
  return (
    <div>
      {category.length > 0 && category[0]?.title && (
        <ContentHeaderAndViewAll
          key={category[0]?.id}
          HeaderTitle={category[0]?.title}
          path={`/all-posts/${category[0]?.title.toLowerCase()}`}
        />
      )}

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {/* Featured Article section */}
        {!featuredPost ? (
          <h1>Loading Posts......</h1>
        ) : (
          <Link
            href={`/${featuredPost.category}/${featuredPost.id}`}
            key={featuredPost.id}
            className="lg:col-span-2 py-2 shadow-sm dark:shadow-gray-700 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300  ease-in-out overflow-hidden flex flex-col">
            <div className="relative">
              <Image
                height={100}
                width={100}
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-60 object-cover"
              />
              {/* Tag over the image */}
              <span className="absolute bottom-4 left-4 bg-teal-600 text-gray-300 text-xs font-bold px-3 py-1 rounded-full">
                {featuredPost.category}
              </span>
            </div>
            <div className="px-2 flex-1 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl mt-5 md:text-2xl line-clamp-2 hover:text-teal-400 font-extrabold leading-tight text-foreground">
                  {featuredPost.title}
                </h1>
                <p className="text-sm text-primary mt-2">
                  by{" "}
                  <span className="text-teal-400 font-medium">
                    {featuredPost.author}
                  </span>{" "}
                  {featuredPost.date}
                </p>
                <p className="text-primary text-base mt-4">
                  {featuredPost.description}
                </p>
              </div>
            </div>
          </Link>
        )}

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
