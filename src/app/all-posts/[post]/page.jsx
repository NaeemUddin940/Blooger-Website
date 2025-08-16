"use client";
import { useParams } from "next/navigation";
import { posts } from "../../../Data/db";
import HorizontalPostBigCard from "../../../components/PostCard/HorizontalPostBigCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

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
      <div className="mt-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-lg">
                  <span>Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/all-posts" className="text-lg">
                  <span>All Posts</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-lg">
                <span>{capitalizeLetter}</span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {filtered.map((post) => (
        <HorizontalPostBigCard key={post.id} post={post} />
      ))}
    </div>
  );
}
