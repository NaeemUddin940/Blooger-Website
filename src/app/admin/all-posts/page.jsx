"use client";
import Image from "next/image";
import { useBlogContext } from "../../../context/BlogContext";

export default function page() {
  const { allposts } = useBlogContext();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-10">
      {allposts.map((post) => (
        <div
          key={post.title}
          className="flex shadow-sm hover:shadow-lg hover:rounded-lg transition-transform duration-300 ease-in-out items-start gap-5 cursor-pointer my-3">
          <div className="relative flex-shrink-0 ">
            <Image
              src={post.image}
              alt={post.title}
              height={100}
              width={100}
              className="w-50 h-32 object-cover"
            />
            {/* Tag over the image */}
            <span className="absolute bottom-2 left-2 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <h3 className="text-lg md:text-xl hover:text-teal-400 font-extrabold leading-tight text-primary">
              {post.title}
            </h3>
            <p className="text-sm text-primary mt-2">
              by{" "}
              <span className="text-teal-600 font-medium">{post.author}</span> -{" "}
              {post.date}
            </p>
            <p className="text-primary lg:block text-sm my-2 hidden">
              {post.description}
            </p>
            <div className="px-3 inline-block py-1 bg-teal-500 text-foreground rounded-2xl">
              <button>{post.category}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
