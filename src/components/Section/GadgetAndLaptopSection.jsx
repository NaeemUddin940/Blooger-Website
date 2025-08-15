"use client";
import React from "react";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import Image from "next/image";
import { posts } from "@/Data/db";

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
          link={"/gadgets"}
        />
        {/* Laptop Section */}
        <FeaturedSection
          data={laptopSection}
          HeaderTitle={"Laptops"}
          link={"/laptops"}
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
            <div key={post.id}>
              <div className="relative mt-3">
                <Image
                  width={100}
                  height={100}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-teal-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="py-1 px-2">
                <h3 className="text-lg md:text-xl line-clamp-2 font-extrabold leading-tight text-primary">
                  {post.title}
                </h3>
                <p className="text-sm text-primary mt-2">
                  by{" "}
                  <span className="text-teal-600 font-medium">
                    {post.author}
                  </span>{" "}
                  - {post.date}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Side Articles List */}
      <div className="flex flex-col gap-4">
        {data
          .filter((post) => !post.isFeatured)
          .map((post) => (
            <SideArticleCard key={post.id} article={post} />
          ))}
      </div>
    </div>
  );
};

// Reusable component for the side article cards
const SideArticleCard = ({ article }) => (
  <div className="flex items-center gap-4 shadow-sm hover:shadow-lg hover:rounded-lg hover:scale-[1.02] transition-transform duration-300 py-1 ease-in-out rounded-lg  cursor-pointer">
    <img
      src={article.image}
      alt={article.title}
      className="w-24 h-16 object-cover"
    />
    <div className="flex-1">
      <h3 className="text-sm md:text-base line-clamp-2 font-bold text-primary">
        {article.title}
      </h3>
      <p className="text-xs text-gray-400 mt-1">{article.date}</p>
    </div>
  </div>
);

export default GadgetAndLaptopSection;
