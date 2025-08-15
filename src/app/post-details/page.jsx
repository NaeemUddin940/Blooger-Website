"use client";
import React, { useState } from "react";

import PostContent from "@/components/PostContent/PostContent";
import { ArrowRight, ArrowLeft } from "lucide-react";

const PostDetails = () => {
  // Mock data for the components

  return (
    <div className="flex flex-col mt-1">
      <div>
        <PostContent />
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
