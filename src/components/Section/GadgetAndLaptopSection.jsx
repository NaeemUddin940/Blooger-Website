"use client";
import React from "react";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import FeaturedCard from "@/components/PostCard/FeaturedCard";
import { HorizontalPostSmallCard } from "../PostCard/HorizontalPostSmallCard";
import { useBlogContext } from "@/context/BlogContext";

// Main GadgetAndLaptopSection component
const GadgetAndLaptopSection = () => {
  const { allposts, category } = useBlogContext();
  const gadgetSection = allposts
    .filter((post) => post.category === category[2]?.title)
    .slice(0, 4);
  const laptopSection = allposts
    .filter((post) => post.category === category[3]?.title)
    .slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-2">
        {/* Gadget Section */}
        <FeaturedSection
          data={gadgetSection}
          HeaderTitle={category[2]?.title}
          link={`/all-posts/${category[2]?.title}`}
        />
        {/* Laptop Section */}
        <FeaturedSection
          data={laptopSection}
          HeaderTitle={category[3]?.title}
          link={`/all-posts/${category[3]?.title}`}
        />
      </div>
    </div>
  );
};

// Reusable component for a single news section
const FeaturedSection = ({ data, HeaderTitle, link }) => {
  return (
    <div className="flex-1 ">
      {/* Header section for each column */}
      <ContentHeaderAndViewAll HeaderTitle={HeaderTitle} path={link} />

      {/* Featured Article */}
      {/* Featured Article */}
      <div className="overflow-hidden shadow-sm hover:shadow-lg flex flex-col hover:rounded-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out">
        {data
          .filter((post) => post.status === "featured")
          .slice(0, 1)
          .map((post, index) => (
            <FeaturedCard key={`${post.id}-${index}`} post={post} />
          ))}
      </div>

      {/* Side Articles List */}
      <div className="flex flex-col gap-4">
        {data
          .filter((post) => post.status !== "featured")
          .map((post, index) => (
            <HorizontalPostSmallCard key={`${post.id}-${index}`} post={post} />
          ))}
      </div>
    </div>
  );
};

export default GadgetAndLaptopSection;
