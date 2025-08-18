"use client";
import { createContext, useContext, useState } from "react";
import { posts } from "@/Data/db";
import { db } from "@/Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
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

  const [allposts, setAllPosts] = useState([]);
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

  // Fetch posts only once when the component mounts
  getPosts();
  // useEffect(() => {
  // }, []);

  const [formData, setFormData] = useState({
    id: "",
    isFeatured: false,
    category: "",
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
    isLatest: false,
    isPopular: false,
  });

  const state = {
    HealthPosts,
    Reviews,
    podcastSection,
    gadgetSection,
    laptopSection,
    travelSection,
    latestPost,
    popularPost,
    allposts,
    formData,
    setFormData,
  };
  return <BlogContext.Provider value={state}>{children}</BlogContext.Provider>;
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
