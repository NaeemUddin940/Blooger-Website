import Image from "next/image";
import React from "react";
import { useCapitalize } from "../../Hooks/useCapitalize";

export default function AdminPostCard({ post, setStatusPostId }) {
  return (
    <div
      key={post._id}
      onClick={() => setStatusPostId(post._id)}
      className="flex shadow-sm p-2 dark:shadow-gray-700 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out items-start gap-5 cursor-pointer my-3">
      <div className="relative flex-shrink-0">
        <Image
          src={post.image}
          alt={post.title}
          height={100}
          width={100}
          className="w-50 h-32 object-cover"
        />
        <span className="absolute bottom-2 left-2 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {useCapitalize(post.category)}
        </span>
      </div>
      <div className="flex-1 mt-4 md:mt-0">
        <h3 className="text-lg md:text-xl hover:text-teal-400 font-extrabold leading-tight text-primary">
          {post.title}
        </h3>
        <p className="text-sm text-primary mt-2">
          by <span className="text-teal-600 font-medium">{post.author}</span> -{" "}
          {post.date}
        </p>
        <p className="text-primary text-sm my-2">{post.description}</p>
        <div className="px-3 inline-block py-1 bg-teal-500 text-foreground rounded-2xl">
          <button>{useCapitalize(post.status)}</button>
        </div>
      </div>
    </div>
  );
}
