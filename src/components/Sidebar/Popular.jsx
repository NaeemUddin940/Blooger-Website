import React from "react";
import { HorizontalPostSmallCard } from "../PostCard/HorizontalPostSmallCard";

export default function Popular({ popularPosts }) {
  return (
    <div>
      {" "}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          POPULAR POSTS
        </h2>
        <div className="flex flex-col gap-4">
          {popularPosts.map((post) => (
            <HorizontalPostSmallCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
