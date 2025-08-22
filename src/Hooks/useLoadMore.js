"use client";
import { useEffect, useState } from "react";

export function useLoadMore(posts, initialPost, nextPost) {
  const [visibleCount, setVisibleCount] = useState(initialPost);
  const [post, setPosts] = useState(posts.slice(0, initialPost));

  useEffect(() => {
    
    const newPosts = posts.slice(0, visibleCount);
    if (newPosts.length !== post.length) {
      setPosts(newPosts);
    }
  }, [posts, visibleCount]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + nextPost);
  };

  const hasMore = visibleCount < posts.length;

  return { post, loadMore, hasMore };
}
