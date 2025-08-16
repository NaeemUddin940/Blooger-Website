import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Travel({travelPosts}) {
  return (
    <div>
      {" "}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          TRAVEL
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {travelPosts.map((post) => (
            <Link
              href={`/${post.category}/${post.id}`}
              key={post.id}
              className="relative overflow-hidden shadow-sm hover:shadow-lg cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out">
              <Image
                height={100}
                width={100}
                src={post.image}
                alt={post.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 flex items-end p-2 rounded-xl">
                <h3 className="text-xs font-bold text-white leading-tight">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
