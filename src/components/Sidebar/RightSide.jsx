import React from "react";
import { posts } from "@/Data/db";
import Categories from "@/components/Sidebar/Categories";
import Popular from "@/components/Sidebar/Popular";
import Travel from "@/components/Sidebar/Travel";
import MainTag from "@/components/Sidebar/MainTag";
import MailForm from "@/components/Sidebar/MailForm";
import SocialIcon from "@/components/Sidebar/SocialIcon";

// Main RightSide component for the sidebar
export default function RightSide() {
  const popularPosts = posts.filter((post) => post.Popular).slice(0, 5);
  const travelPosts = posts.filter((post) => post.category === "Travel");
  return (
    <div className="sticky top-0 pt-2">
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
      <Travel travelPosts={travelPosts} />

      {/* Mailchimp Form Section */}
      <MailForm />

      {/* Categories Section */}
      <Categories />

      {/* Main Tags Section */}
      <MainTag />
    </div>
  );
}
