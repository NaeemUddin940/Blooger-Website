import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const trendingData = "How We Know Disinfectants Should Kill the Covid-19";

const heroArticles = [
  {
    id: 1,
    isFeatured: true,
    category: "APPLE",
    title: "11 of Best Laptops Evaluated Based on Budget",
    author: "by John Doe",
    date: "August 02, 2021",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    isFeatured: false,
    category: "LAPTOPS",
    title: "Apple Watch Series 5 is the Best One Yet By Consumer",
    date: "August 02, 2021",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    isFeatured: false,
    category: "LAPTOPS",
    title: "Here's What People Think of iOS 13 New Dark Mode",
    date: "August 02, 2021",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    isFeatured: false,
    category: "APPLE",
    title: "18 Practices for Building Responsive Web Applications",
    date: "August 02, 2021",
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
];

export function HeroSection() {
  const featuredArticle = heroArticles.find((article) => article.isFeatured);
  const sideArticles = heroArticles.filter((article) => !article.isFeatured);

  const [article2, article3, article4] = sideArticles;

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0 z-10">
      {/* Trending Section */}
      <div className="flex mt-4 items-center border-1 justify-between bg-secondery shadow-xl p-4 rounded-lg">
        <div className="flex items-center space-x-4 ">
          <span className="font-bold text-sm text-white px-2 py-1 bg-black">TRENDING</span>
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

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-4 gap-4 mt-4">
        {/* Item 1 */}

        {featuredArticle && (
          <Link
            href={"#"}
            className="lg:col-span-2 md:col-span-2 lg:row-span-4 h-60 lg:h-125">
            <FeaturedArticle article={featuredArticle} />
          </Link>
        )}

        {/* Item 2 */}
        {article2 && (
          <Link
            href={"#"}
            className="lg:col-span-2
 lg:row-span-2 lg:col-start-3 h-60">
            <SideArticle article={article2} />
          </Link>
        )}

        {/* Item 3 */}
        {article3 && (
          <Link
            href={"#"}
            className="lg:row-span-2 lg:col-start-3 lg:row-start-3 h-60">
            <SideArticle article={article3} />
          </Link>
        )}

        {/* Item 4 */}
        {article4 && (
          <Link
            href={"#"}
            className="lg:row-span-2 md:col-span-2 lg:col-start-4 lg:row-start-3 h-60">
            <SideArticle article={article4} />
          </Link>
        )}
      </div>
    </div>
  );
}

// Component for the large, featured article on the left.
function FeaturedArticle({ article }) {
  return (
    <div className="relative rounded-lg overflow-hidden h-full">
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0"></div>
      <div className="absolute bottom-0 left-0 p-8">
        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {article.category}
        </span>
        <h2 className="mt-2 text-3xl hover:text-blue-500 text-white font-bold leading-tight">
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
    <div className="relative rounded-lg overflow-hidden h-full">
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {article.category}
        </span>
        <h3 className="mt-1 text-base hover:text-blue-500 text-white font-bold leading-tight">
          {article.title}
        </h3>
        <p className="text-gray-100 text-xs mt-1">{article.date}</p>
      </div>
    </div>
  );
}
