import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedCard({ post }) {
  return (
    <Link href={`/${post.category}/${post.id}`}>
      <div className="relative mt-3">
        <Image
          width={100}
          height={100}
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute bottom-4 left-4 bg-teal-400  text-white text-xs font-bold px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
      <div className="py-1 px-2">
        <h3 className="text-lg md:text-xl line-clamp-2 font-extrabold leading-tight text-primary">
          {post.title}
        </h3>
        <p className="text-sm text-primary mt-2">
          by <span className="text-teal-600 font-medium">{post.author}</span>{" "}
          {post.date}
        </p>
      </div>
    </Link>
  );
}
