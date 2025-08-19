"use client";
import { useBlogContext } from "@/context/BlogContext";
import { db } from "@/Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const trendingData = "How We Know Disinfectants Should Kill the Covid-19";

// const heroArticles = [
//   {
//     id: 1,
//     isFeatured: true,
//     category: "APPLE",
//     title: "11 of Best Laptops Evaluated Based on Budget",
//     author: "by John Doe",
//     date: "August 02, 2021",
//     image:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5O0ZY2WIUUAlZZC1w0fk2DRsAIiW2bqh1NrdKtCa4v3BibsgoJFnA_f6jEYLAMXKbDu8sMIMhwrD0vKXj7-JElNqK87Pxi0joMtMElNRaAFFGD-AvNzMw2fn02QfwSWw7UPBsD899wTI/s16000/pbt66.jpg",
//   },
//   {
//     id: 2,
//     isFeatured: false,
//     category: "LAPTOPS",
//     title: "Apple Watch Series 5 is the Best One Yet By Consumer",
//     date: "August 02, 2021",
//     image:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgf8-arWDMvbTeZBWVxA4Ky1H6aExuTk9SEJNdjPnPWgW4O7YXw3iQW6KvRvVr6Fz9crqCwp1YgkIbi3pHFs2xlIiA9GwPsEdIPkdilF28j964yXzX59AU_4NMHTVfUOudE7Kc5vnb_-0/s16000/pbt65.jpg",
//   },
//   {
//     id: 3,
//     isFeatured: false,
//     category: "LAPTOPS",
//     title: "Here's What People Think of iOS 13 New Dark Mode",
//     date: "August 02, 2021",
//     image:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUqASiDM5EEA5bWE5BxvKpAmitDCN37MT2LFNcgKY4i7K1EGip8XfmW1_s-IDaqD1aXN2Xfad5iOmNzF6SDWEG3wtlCGKAKtAa3iDMGrjlqYq-L528jopspUzR_yB3DheeAqK5PGpWeGI/s16000/pbt61.jpg",
//   },
//   {
//     id: 4,
//     isFeatured: false,
//     category: "APPLE",
//     title: "18 Practices for Building Responsive Web Applications",
//     date: "August 02, 2021",
//     image:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKUIl2yc8d5warqlbvzvhxrk4yzGK0FXr4bnPDnW1iKNiJqg5YqvCuYFD4xX1q383w-wU_WJaN_5ZcCiNVDYSk26rQQo-iup04BZUdSkiDqbRuHWgYE9PmHpVjj_lyb1ozr3j4glvrfVs/s16000/pbt62.jpg",
//   },
// ];

export function HeroSection() {
 const {heroArticles} = useBlogContext()

  const featuredArticle = heroArticles.find((article) => article.isFeatured);
  const sideArticles = heroArticles.filter((article) => !article.isFeatured);
  const pathName = usePathname();
  const [article2, article3, article4] = sideArticles;

  return (
    <div>
      {pathName === "/" && (
        <div className="max-w-7xl lg:px-0 z-10">
          {/* Trending Section */}
          <div className="flex mt-4 items-center border-1 justify-between bg-secondery shadow-xl p-4 rounded-lg">
            <div className="flex items-center space-x-4 ">
              <span className="font-bold text-sm text-white px-2 py-1 bg-black">
                TRENDING
              </span>
              <span className="text-gray-500 text-sm lg:text-lg line-clamp-1">
                {trendingData}
              </span>
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

            {featuredArticle && (
              <Link
                href={`/${featuredArticle.category}/${featuredArticle.id}`}
                className="lg:col-span-2 group md:col-span-2 lg:row-span-4 h-40 md:h-70 lg:h-125">
                <FeaturedArticle article={featuredArticle} />
              </Link>
            )}

            {/* Item 2 */}
            {article2 && (
              <Link
                href={"#"}
                className="lg:col-span-2 group lg:row-span-2 lg:col-start-3 h-40 md:h-[100%]">
                <SideArticle article={article2} />
              </Link>
            )}

            {/* Item 3 */}
            {article3 && (
              <Link
                href={"#"}
                className="lg:row-span-2 group lg:col-start-3 lg:row-start-3 h-40 md:h-[100%]">
                <SideArticle article={article3} />
              </Link>
            )}

            {/* Item 4 */}
            {article4 && (
              <Link
                href={"#"}
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
        className="absolute group-hover:scale-125 transition-transform duration-300 inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 left-0 lg:p-8 p-2">
        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
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
        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
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
