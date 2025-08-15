import Image from "next/image";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import {posts} from "@/Data/db"


// Main LatestSection component
export const LatestSection = () => {
  const latestSection = posts.filter((post) => post.isLatest)
  return (
    <div>
      {/* Header section */}
      <ContentHeaderAndViewAll HeaderTitle={"Latest News"}  path="/latest-news"/>

      {/* List of articles */}
      <div className="flex flex-col gap-4">
        {latestSection.map((post) => (
          <ArticleCard key={post.id} article={post} />
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



// Reusable component for a single article card in the list
const ArticleCard = ({ article }) => (
  <div className="flex hover:scale-[1.02] shadow-sm hover:shadow-lg hover:rounded-lg transition-transform duration-300 ease-in-out items-start gap-5 py-2 cursor-pointer ">
    <div className="relative flex-shrink-0 ">
      <Image
        height={100}
        width={100}
        src={article.image}
        alt={article.title}
        className="w-full md:w-48 h-32 object-cover"
      />
      {/* Tag over the image */}
      <span className="absolute bottom-2 left-2 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        {article.category}
      </span>
    </div>
    <div className="flex-1 mt-4 md:mt-0">
      <h3 className="text-lg md:text-xl font-extrabold leading-tight text-primary">
        {article.title}
      </h3>
      <p className="text-sm text-primary mt-2">
        by <span className="text-blue-600 font-medium">{article.author}</span> -{" "}
        {article.date}
      </p>
      <p className="text-primary lg:block text-sm mt-3 hidden">
        {article.description}
      </p>
    </div>
  </div>
);


