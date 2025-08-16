"use client";
import { createContext, useContext } from "react";
import { posts } from "@/Data/db";
const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const HealthPosts = posts.filter((post) => post.category === "Health");
  const Reviews = posts.filter((post) => post.category === "Reviews");
  const podcastSection = posts.filter((post) => post.category === "Podcast");
  const gadgetSection = posts.filter((post) => post.category === "Gadget");
  const laptopSection = posts.filter((post) => post.category === "Laptop");
  const travelSection = posts.filter((post) => post.category === "Travel");
  const latestPost = posts.filter((post) => post.isLatest);
  const popularPost = posts.filter((post) => post.Popular);

  const state = {
    HealthPosts,
    Reviews,
    podcastSection,
    gadgetSection,
    laptopSection,
    travelSection,
    latestPost,
    popularPost,
  };
  return <BlogContext.Provider value={state}>{children}</BlogContext.Provider>;
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
