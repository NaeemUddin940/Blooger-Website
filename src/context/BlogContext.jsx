"use client";
import { createContext, useContext } from "react";
import React, { useState, useEffect, useRef } from "react";
const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  // ডান কলামের স্টাইল পরিচালনা করতে useState hook ব্যবহার করা হয়েছে।
  const [rightColumnStyle, setRightColumnStyle] = useState({});

  // DOM এলিমেন্ট অ্যাক্সেস করতে useRef hook ব্যবহার করা হয়েছে।
  const mainContainerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnParentRef = useRef(null);
  const rightColumnRef = useRef(null);

  // স্ক্রলিং এবং উইন্ডো রিসাইজ ইভেন্ট পরিচালনা করতে useEffect hook ব্যবহার করা হয়েছে।
  useEffect(() => {
    const updateLayout = () => {
      // DOM এলিমেন্টগুলো উপস্থিত আছে কিনা তা নিশ্চিত করা হচ্ছে।
      if (
        !leftColumnRef.current ||
        !rightColumnRef.current ||
        !rightColumnParentRef.current
      ) {
        return;
      }

      const leftHeight = leftColumnRef.current.offsetHeight;
      const rightHeight = rightColumnRef.current.offsetHeight;
      const rightColumnParentWidth = rightColumnParentRef.current.offsetWidth;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // ডান কলামটি কখন নিচে আটকে যাবে তা নির্ধারণ করা হচ্ছে।
      const pinTop =
        leftColumnRef.current.offsetTop + leftHeight - viewportHeight + 16;
      const absoluteTop = leftHeight - rightHeight;

      if (scrollY >= pinTop) {
        // নিচে আটকে থাকার জন্য স্টাইল সেট করা হচ্ছে।
        setRightColumnStyle({
          position: "absolute",
          top: `${absoluteTop}px`,
          bottom: "auto",
          width: `${rightColumnParentWidth}px`,
        });
      } else {
        // উপরে আটকে থাকার জন্য স্টাইল সেট করা হচ্ছে।
        setRightColumnStyle({
          position: "sticky",
          top: "2rem",
          bottom: "auto",
          width: "100%",
        });
      }
    };

    // ইভেন্ট লিসেনার যুক্ত করা হচ্ছে।
    window.addEventListener("scroll", updateLayout);
    window.addEventListener("resize", updateLayout);

    // প্রাথমিক লোডের সময় লেআউট আপডেট করা হচ্ছে।
    updateLayout();

    // কম্পোনেন্ট আনমাউন্ট হওয়ার সময় ইভেন্ট লিসেনারগুলো মুছে ফেলা হচ্ছে।
    return () => {
      window.removeEventListener("scroll", updateLayout);
      window.removeEventListener("resize", updateLayout);
    };
  }, []); // কন্টেন্ট পরিবর্তন হলে লেআউট পুনরায় গণনা করা হচ্ছে।

  const state = {
    mainContainerRef,
    leftColumnRef,
    rightColumnParentRef,
    rightColumnRef,
    rightColumnStyle,
  };
  return <BlogContext.Provider value={state}>{children}</BlogContext.Provider>;
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
