import React from "react";
import { posts } from "@/Data/db";
import Categories from "@/components/Sidebar/Categories";
import Popular from "@/components/Sidebar/Popular";
import Travel from "@/components/Sidebar/Travel";
import MainTag from "@/components/Sidebar/MainTag";
import MailForm from "@/components/Sidebar/MailForm";
import SocialIcon from "@/components/Sidebar/SocialIcon";
import { useBlogContext } from "@/context/BlogContext";

// Main RightSide component for the sidebar
export default function RightSide() {
  const { category, allposts } = useBlogContext();
  const popularPosts = allposts
    .filter((post) => post.status === "popular")
    .slice(0, 5);
  const travelPosts = allposts.filter(
    (post) => post.category === category[4]?.title
  );
  return (
    <div className="sticky top-0 pt-2 px-2">
      {/* Follow Us Section */}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          FOLLOW US
        </h2>
        <SocialIcon />
      </div>

      {/* Popular Posts Section */}
      <Popular popularPosts={popularPosts} />

      {/* Travel Section */}
      <Travel travelPosts={travelPosts} category={category} />

      {/* Mailchimp Form Section */}
      <MailForm />

      {/* Categories Section */}
      <Categories />

      {/* Main Tags Section */}
      <MainTag />
    </div>
  );
}
