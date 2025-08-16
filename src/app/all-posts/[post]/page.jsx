"use client";
import { useParams } from "next/navigation";
import { posts } from "../../../Data/db";
import HorizontalPostBigCard from "../../../components/PostCard/HorizontalPostBigCard";

export default function page() {
  const { post } = useParams();
  const capitalizeLetter = post.charAt(0).toUpperCase() + post.slice(1);

  let filtered;
  if (capitalizeLetter === "Latest") {
    filtered = posts.filter((post) => post.isLatest);
  } else if (capitalizeLetter === "Popular") {
    filtered = posts.filter((post) => post.Popular);
  } else {
    filtered = posts.filter((post) => post.category === capitalizeLetter);
  }

  return (
    <div>
      {filtered.map((post) => (
        <HorizontalPostBigCard key={post.id} post={post} />
      ))}
    </div>
  );
}
