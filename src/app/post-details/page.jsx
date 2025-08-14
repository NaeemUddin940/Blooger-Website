"use client";
import React, { useState } from "react";
import RightSide from "@/components/MainContentRightSide/RightSide";
import MainContent from "@/components/MainContent/MainContent";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useBlogContext } from "@/context/BlogContext";

const PostDetails = () => {
  const {
    rightColumnParentRef,
    mainContainerRef,
    leftColumnRef,
    rightColumnRef,
    rightColumnStyle,
  } = useBlogContext();
  // Mock data for the components

  return (
    <div className="flex flex-col mt-1">
      <div>
        <div
          ref={mainContainerRef}
          id="main-container"
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 bg-background">
          {/* বাম দিকের কলাম - দীর্ঘ কন্টেন্ট */}
          <div ref={leftColumnRef} id="left-column" className="md:col-span-2">
            <MainContent/>
          </div>

          {/* ডান দিকের কলাম - সংক্ষিপ্ত কন্টেন্ট */}
          <div
            ref={rightColumnParentRef}
            className="md:col-span-1 relative hidden md:block">
            <div
              ref={rightColumnRef}
              id="right-column"
              className="p-1 rounded-lg shadow-sm"
              style={rightColumnStyle}>
              <RightSide />
            </div>
          </div>
        </div>
      </div>
      {/* Footer Navigation */}
      <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-700 text-sm text-gray-400">
        <a
          href="#"
          className="flex items-center gap-2 hover:text-teal-500 transition-colors duration-200">
          <ArrowLeft size={16} /> Previous Post
        </a>
        <a
          href="#"
          className="flex items-center gap-2 hover:text-teal-500 transition-colors duration-200">
          Next Post <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default PostDetails;
