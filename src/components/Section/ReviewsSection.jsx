import React from "react";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import Image from "next/image";
import { posts } from "@/Data/db";
import Link from "next/link";

// Main ReviewsSection component
export const ReviewsSection = () => {
  const Reviews = posts.filter((post) => post.category === "Reviews");
  return (
    <div className="">
      {/* Header section */}
      <ContentHeaderAndViewAll HeaderTitle={"Reviews"} path="/reviews" />

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
        {Reviews.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

// Reusable component for an article card
const ArticleCard = ({ post }) => {
  return (
    <div className="overflow-hidden flex flex-col cursor-pointer hover:scale-[1.02] transition-transform duration-300 hover:rounded-lg shadow-sm hover:shadow-lg ease-in-out">
      <Link href={`/post-details/${post.id}`} className="relative">
        <Image
          width={100}
          height={100}
          src={post.image}
          alt={post.title}
          className="w-full object-cover"
        />
        {/* Tag over the image */}
        <span className="absolute bottom-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {post.category}
        </span>
      </Link>
      <div className="px-2 flex-1 flex flex-col py-1 justify-between">
        <h3 className="text-lg md:text-lg font-medium leading-tight line-clamp-2 text-primary">
          {post.title}
        </h3>
        <p className="text-sm text-primary mt-2">{post.date}</p>
      </div>
    </div>
  );
};
