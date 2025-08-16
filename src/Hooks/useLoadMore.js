"use client";
import { useState } from "react";

export function useLoadMore(posts, initialPost, nextPost) {
  const [visibleCount, setVisibleCount] = useState(initialPost);
  const [post, setPosts] = useState(posts.slice(0, visibleCount));

  const loadMore = () => {
    const nextCount = visibleCount + nextPost;
    setPosts(posts.slice(0, nextCount));
    setVisibleCount(nextCount);
  };

  const hasMore = visibleCount < posts.length;

  return { post, loadMore, hasMore };
}
