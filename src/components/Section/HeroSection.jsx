"use client";
import { useBlogContext } from "@/context/BlogContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function HeroSection() {
  const pathName = usePathname();
  const { allposts } = useBlogContext();

  let newHeadings = allposts.map((post) => post.title);
  const [headingIndex, setHeadingIndex] = useState(0);

  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimatingOut(true);

      setTimeout(() => {
        setHeadingIndex((prevIndex) => (prevIndex + 1) % newHeadings.length);
        setIsAnimatingOut(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const featuredPost = allposts.filter((post) => post.status === "featured");

  const uniqueCategory = [
    ...new Set(featuredPost.map((post) => post.category)),
  ];

  const categoryWisedFeaturedPost = uniqueCategory
    .map((category) => featuredPost.find((post) => post.category === category))
    .slice(0, 4);

  const article1 = categoryWisedFeaturedPost[0];
  const article2 = categoryWisedFeaturedPost[1];
  const article3 = categoryWisedFeaturedPost[2];
  const article4 = categoryWisedFeaturedPost[3];

  return (
    <div>
      {pathName === "/" && (
        <div className="max-w-7xl lg:px-0 z-10">
          {/* Trending Section */}
          <div className="flex mt-4 items-center border-1 justify-between bg-secondery shadow-xl p-4 rounded-lg">
            <div className="flex items-center space-x-4 ">
              <span className="font-bold text-sm bg-black text-white dark:text-black px-2 py-1 dark:bg-white">
                TRENDING
              </span>
              <h1
                className={`
                   dark:text-gray-400 text-xl lg:text-lg line-clamp-1
                    transition-all duration-500 ease-in-out transform
                    ${
                      isAnimatingOut
                        ? "opacity-0 -translate-y-2"
                        : "opacity-100 translate-y-0"
                    }
                `}>
                {newHeadings[headingIndex]}
              </h1>
            </div>
            <div className="flex space-x-2 text-gray-500">
              <button className="hover:bg-violet-500 text-foreground cursor-pointer transition duration-200">
                <ChevronLeft />
              </button>
              <button className="hover:bg-violet-500 text-foreground cursor-pointer transition duration-200">
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-4 gap-2 mt-2">
            {/* Item 1 */}
            {article1 && (
              <Link
                key={article1.id}
                href={`/${article1.category}/${article1.id}`}
                className="lg:col-span-2 group md:col-span-2 lg:row-span-4 h-40 md:h-70 lg:h-125">
                <FeaturedArticle article={article1} />
              </Link>
            )}

            {/* Item 2 */}
            {article2 && (
              <Link
                href={`/${article2.category}/${article2.id}`}
                className="lg:col-span-2 group lg:row-span-2 lg:col-start-3 h-40 md:h-[100%]">
                <SideArticle article={article2} />
              </Link>
            )}

            {/* Item 3 */}
            {article3 && (
              <Link
                href={`/${article3.category}/${article3.id}`}
                className="lg:row-span-2 group lg:col-start-3 lg:row-start-3 h-40 md:h-[100%]">
                <SideArticle article={article3} />
              </Link>
            )}

            {/* Item 4 */}
            {article4 && (
              <Link
                href={`/${article4.category}/${article4.id}`}
                className="lg:row-span-2 group md:col-span-2 lg:col-start-4 lg:row-start-3 h-40 md:h-[100%]">
                <SideArticle article={article4} />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Component for the large, featured article on the left.
function FeaturedArticle({ article }) {
  return (
    <div className="relative overflow-hidden h-full">
      <img
        src={article.image}
        alt={article.title}
        className="absolute group-hover:scale-110 transition-transform duration-200 inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 left-0 lg:p-8 p-2">
        <span className="bg-teal-600 text-gray-100 text-xs font-bold px-3 py-1 rounded-full">
          {article.category}
        </span>
        <h2 className="mt-2 lg:text-3xl line-clamp-2 hover:text-blue-500 text-white font-bold leading-tight">
          {article.title}
        </h2>
        {article.author && (
          <p className="text-gray-300 text-sm mt-1">
            {article.author} - {article.date}
          </p>
        )}
      </div>
    </div>
  );
}

// Component for the smaller, side articles.
function SideArticle({ article }) {
  return (
    <div className="relative overflow-hidden h-full">
      <Image
        width={100}
        height={100}
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full group-hover:scale-125 transition-transform duration-300 h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <span className="bg-teal-600 text-gray-100 text-xs font-bold px-2 py-1 rounded-full">
          {article.category}
        </span>
        <h3 className="mt-1 text-base hover:text-blue-500 text-white font-bold line-clamp-2 leading-tight">
          {article.title}
        </h3>
        <p className="text-gray-100 text-xs mt-1">{article.date}</p>
      </div>
    </div>
  );
}
