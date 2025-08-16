"use client";
import React from "react";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import { posts } from "@/Data/db";
import FeaturedCard from "@/components/PostCard/FeaturedCard";
import { HorizontalPostSmallCard } from "../PostCard/HorizontalPostSmallCard";

// Main GadgetAndLaptopSection component
const GadgetAndLaptopSection = () => {
  const gadgetSection = posts.filter((post) => post.category === "Gadget");
  const laptopSection = posts.filter((post) => post.category === "Laptop");

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-2">
        {/* Gadget Section */}
        <FeaturedSection
          data={gadgetSection}
          HeaderTitle={"Gadgets"}
          link={`/all-posts/gadget`}
        />
        {/* Laptop Section */}
        <FeaturedSection
          data={laptopSection}
          HeaderTitle={"Laptops"}
          link={`/all-posts/Laptop`}
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
      <div className="overflow-hidden shadow-sm hover:shadow-lg flex flex-col hover:rounded-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out">
        {data
          .filter((post) => post.isFeatured)
          .map((post) => (
            <FeaturedCard key={post.id} post={post} />
          ))}
      </div>

      {/* Side Articles List */}
      <div className="flex flex-col gap-4">
        {data
          .filter((post) => !post.isFeatured)
          .map((post) => (
            <HorizontalPostSmallCard key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};

export default GadgetAndLaptopSection;
