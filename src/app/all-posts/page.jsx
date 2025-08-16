"use client";
import Link from "next/link";
// import { useParams } from "next/navigation";
import { posts } from "../../Data/db";
import HorizontalPostBigCard from "../../components/PostCard/HorizontalPostBigCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function page() {
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
              <BreadcrumbPage asChild>
                <Link href="/all-posts" className="text-lg">
                  <span>All Posts</span>
                </Link>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {posts.map((post) => (
        <HorizontalPostBigCard key={post.id} post={post} />
      ))}
    </div>
  );
}
