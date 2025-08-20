"use client";
import { createContext, useContext, useState } from "react";
import { posts } from "@/Data/db";
import { db } from "@/Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  // All State Declaration
  const [allposts, setAllPosts] = useState([]);
  const [heroArticles, setHeroArticles] = useState([]);
  const [category, setCategory] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    status: "",
    category: "Uncategorized",
    title: "",
    author: "",
    description: "",
    content: "",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    image: "",
  });

  // All Filter Based On categorised in page
  const HealthPosts = posts.filter((post) => post.category === "Health");
  const Reviews = posts.filter((post) => post.category === "Reviews");
  const podcastSection = posts.filter((post) => post.category === "Podcast");
  const gadgetSection = posts.filter((post) => post.category === "Gadget");
  const laptopSection = posts.filter((post) => post.category === "Laptop");
  const travelSection = posts.filter((post) => post.category === "Travel");
  const latestPost = posts.filter((post) => post.isLatest);
  const popularPost = posts.filter((post) => post.Popular);

  // Get Posts From Firebase
  const collectionRef = collection(db, "posts");

  const getPosts = async () => {
    try {
      const data = await getDocs(collectionRef);

      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAllPosts(filteredData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  getPosts();

  const categoryListRef = collection(db, "categoryList");

  const getCategory = async () => {
    try {
      const data = await getDocs(categoryListRef);
      const categories = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategory(categories);
      
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  getCategory();
  function handleClick() {
    setStatusPostId(null);
  }
  // Hero Article
  const heroArticleRef = collection(db, "heroArticle");

  const getArticle = async () => {
    try {
      const data = await getDocs(heroArticleRef);
      const articles = data.docs.map((doc) => doc.data());
      setHeroArticles(articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };
  getArticle();

  const state = {
    HealthPosts,
    Reviews,
    category,
    setCategory,
    podcastSection,
    gadgetSection,
    laptopSection,
    travelSection,
    latestPost,
    popularPost,
    handleClick,
    allposts,
    formData,
    setFormData,
    heroArticles,
  };
  return <BlogContext.Provider value={state}>{children}</BlogContext.Provider>;
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
