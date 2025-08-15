import React from "react";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import { HorizontalPostCard } from "../ui/HorizontalPostCard";
import Image from "next/image";
import { posts } from "@/Data/db";

// Main RightSide component for the sidebar
export default function RightSide() {
  const popularPosts = posts.filter((post) => post.Popular);
  const travelPosts = posts.filter((post) => post.category === "Travel");
  return (
    <div className="sticky top-0 pt-2">
      {/* Follow Us Section */}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          FOLLOW US
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center cursor-pointer justify-center p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            <Facebook size={20} className="mr-2" /> Facebook
          </button>
          <button className="flex items-center cursor-pointer justify-center p-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors">
            <Youtube size={20} className="mr-2" /> Youtube
          </button>
          <button className="flex items-center cursor-pointer justify-center p-3 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors">
            <Twitter size={20} className="mr-2" /> Twitter
          </button>
          <button className="flex items-center cursor-pointer justify-center p-3 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors">
            <Instagram size={20} className="mr-2" /> Instagram
          </button>
        </div>
      </div>

      {/* Popular Posts Section */}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          POPULAR POSTS
        </h2>
        <div className="flex flex-col gap-4">
          {popularPosts.map((post) => (
            <HorizontalPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Travel Section */}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          TRAVEL
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {travelPosts.map((post) => (
            <div
              key={post.id}
              className="relative overflow-hidden shadow-sm hover:shadow-lg cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out">
              <Image
                height={100}
                width={100}
                src={post.image}
                alt={post.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 flex items-end p-2 rounded-xl">
                <h3 className="text-xs font-bold text-white leading-tight">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mailchimp Form Section */}
      <div className=" mb-4">
        <h3 className="text-md font-bold mb-2">Mailchimp Form</h3>
        <p className="text-sm text-gray-400 mb-4">
          Subscribe to our mailing list to get the new updates.
        </p>
        <form>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full p-3 rounded-lg bg-background text-foreground text-sm border-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="mt-3 w-full p-3 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors">
            Subscribe
          </button>
        </form>
      </div>

      {/* Categories Section */}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          CATEGORIES
        </h2>
        <ul className="flex flex-col gap-2">
          {["Gadgets", "Healthy", "Podcasts", "Reviews"].map(
            (category, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-gray-400 hover:text-teal-500  transition-colors cursor-pointer">
                <span>{category}</span>
                <span className="text-sm text-gray-500">
                  ({(index + 1) * 50})
                </span>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Main Tags Section */}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          MAIN TAGS
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Cars", "Gadgets", "Games", "Healthy", "Podcasts", "Reviews"].map(
            (tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-foreground text-sm font-medium rounded-full cursor-pointer hover:bg-teal-500 transition-colors">
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
