import React from "react";
import { posts } from "@/Data/db";
import SocialMedia from "@/components/ui/SocialMedia";
import { HorizontalPostSmallCard } from "../PostCard/HorizontalPostSmallCard";
import Categories from "../Sidebar/Categories";

// Main Footer component for the footer
export const Footer = () => {
  const latest = posts.filter((post) => post.isLatest).slice(0, 3);
  const popular = posts.filter((post) => post.Popular).slice(0, 3);

  return (
    <footer className="px-2">
      <div className="lg:w-5xl mx-auto mt-5 border-t-1 border-gray-50">
        {/* Top section with categories and posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-8 border-b border-gray-700">
          {/* Categories & Main Tags */}
          <div>
            <Categories />
          </div>

          {/* Latest Posts */}
          <div className="lg:col-span-1 md:col-span-1">
            <h3 className="text-lg font-extrabold tracking-wide text-foreground mb-4">
              LATEST POSTS
            </h3>
            <div className="flex flex-col gap-4">
              {latest.map((post) => (
                <HorizontalPostSmallCard key={post.id} post={post} />
              ))}
            </div>
            {/* <Button>Load More</Button> */}
          </div>

          {/* Popular Posts */}
          <div className="lg:col-span-1 md:col-span-1">
            <h3 className="text-lg font-extrabold tracking-wide text-foreground mb-4">
              POPULAR POSTS
            </h3>
            <div className="flex flex-col gap-4">
              {popular.map((post) => (
                <HorizontalPostSmallCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div className="hidden md:block lg:hidden">
            {/* About Us & Social Media */}
            <div className="flex flex-col md:flex-row lg:flex-col justify-between items-center py-4 border-b border-gray-700 mb-4">
              <div className="flex flex-col lg:flex-row items-center text-center md:text-left mb-4 md:mb-0">
                <div className="flex-shrink-0 mb-2 md:mb-0">
                  {/* SVG for 'Newsspot' logo, assuming it's text-based or can be represented */}
                  <h2 className="text-2xl font-bold text-foreground tracking-wide">
                    Newsspot
                  </h2>
                </div>
                <div className="md:ml-4 max-w-sm">
                  <p className="text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>
                <div className="flex gap-2">
                  <SocialMedia />
                </div>
              </div>
            </div>

            {/* Copyright Bar */}
            <div className="flex flex-col gap-5 text-lg justify-between items-center mt-4">
              <p>Design by - Pro Blogger Templates</p>
              <div className="flex gap-4 mt-2 md:mt-0 text-primary mb-10">
                <a href="#" className="hover:text-foreground">
                  Home
                </a>
                <a href="#" className="hover:text-foreground">
                  About Us
                </a>
                <a href="#" className="hover:text-foreground">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-foreground">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* For Mobile Device */}
        {/* About Us & Social Media */}
        <div className="flex md:hidden lg:flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-700 my-4">
          <div className="flex items-center flex-col md:flex-row text-center md:text-left mb-4 md:mb-0">
            <div className="flex-shrink-0 mb-2 md:mb-0">
              {/* SVG for 'newsspot' logo, assuming it's text-based or can be represented */}
              <h2 className="text-2xl font-bold text-foreground tracking-wide">
                newsspot
              </h2>
            </div>
            <div className="md:ml-4 max-w-sm">
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <SocialMedia />
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="flex md:hidden lg:flex flex-col md:flex-row justify-between items-center text-lg mt-4">
          <p>Design by - Pro Blogger Templates</p>
          <div className="flex gap-4 mt-2 md:mt-0 text-primary mb-10">
            <a href="#" className="hover:text-foreground">
              Home
            </a>
            <a href="#" className="hover:text-foreground">
              About Us
            </a>
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
