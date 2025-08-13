import React from "react";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";

// Mock data for the articles in the new three-column layout
const articles = [
  {
    id: 1,
    tag: "REVIEWS",
    title: "The Best Xbox 360 Co-Op Offline Split-Screen Games",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNJ4d41mNy4vXBAJA2ExWYnujw2uqN6ZcIOwgWXQBbWkIWeEXEiQXl6aYrtbNzZfeKcf4QPeyEjNJMLp34A2qXXC1_PcP1BUJ4OuIn8JxPzHPMogvoDIRe-TuwrQ9eONOCesXnBP9Hax4/s16000/pbt55.jpg",
  },
  {
    id: 2,
    tag: "CONSOLES",
    title: "Great Local Multiplayer Games to Play on PS5",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJghik19LN34KlhH3ZZhdUNGABNFBCu9TL7w7sQbwbLfu3rBJBz0gJlSJ8ITqGtQdkOMImlAd1ORV-YKvRH-mtHGG8ChrtCHw4MNZUk2zCSveiIk-lN1191gvgkD-b4B6aclZ5BD_LULU/s16000/pbt54.jpg",
  },
  {
    id: 3,
    tag: "DEALS",
    title: "How to Equip Your Studio Like the Top Tech",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQq61wdeQRFM6rzph6NEZXe4_B4TNbVbXZTXzGoT4O1ZDdYnxlwg_wG2BX9BnLLNirt1I244-TmKowkqk3TvCut9hISGpSHYewk0D68AgkYsI7llFX-ErU_r9_qQPgWP75LhFf9dv_dhY/s16000/pbt53.jpg",
  },
];

// Reusable component for an article card
const ArticleCard = ({ article }) => (
  <div className="overflow-hidden shadow-lg flex flex-col cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out">
    <div className="relative">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full object-cover"
      />
      {/* Tag over the image */}
      <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        {article.tag}
      </span>
    </div>
    <div className="px-2 flex-1 flex flex-col py-1 justify-between">
      <h3 className="text-lg md:text-lg font-medium leading-tight line-clamp-2 text-primary">
        {article.title}
      </h3>
      <p className="text-sm text-primary mt-2">{article.date}</p>
    </div>
  </div>
);

// Main ReviewsSection component
export const ReviewsSection = () => {
  return (
    <div className="">
      {/* Header section */}
      <ContentHeaderAndViewAll HeaderTitle={"Reviews"} />

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
