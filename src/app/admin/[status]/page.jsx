"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useBlogContext } from "../../../context/BlogContext";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { useState } from "react";

export default function page() {
  const { status } = useParams();
  const { allposts, setAllPosts, category } = useBlogContext();
  const [statusPostId, setStatusPostId] = useState(null);

  const selectedPost = allposts.find((post) => post.id === statusPostId);

  const handleSetStatus = (postId, newStatus) => {
    setAllPosts((prev) => {
      return prev.map((post) => {
        return post.id === postId ? { ...post, status: newStatus } : post;
      });
    });
  };
  const filteredPosts = allposts.filter((post) => post.status === status);
  if (status === "all-posts") {
  }
  return (
    <div>
      <div className="grid  grid-cols-1 xl:grid-cols-2 px-5">
        {(allposts || filteredPosts).length > 0 ? (
          (status === "all-posts" ? allposts : filteredPosts).map((post) => (
            <div
              key={post.title}
              onClick={() => setStatusPostId(post.id)}
              className="flex shadow-sm p-2 dark:shadow-gray-700 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300  ease-in-out items-start gap-5 cursor-pointer my-3">
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
                  {post.category.toUpperCase()}
                </span>
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <h3 className="text-lg md:text-xl hover:text-teal-400 font-extrabold leading-tight text-primary">
                  {post.title}
                </h3>
                <p className="text-sm text-primary mt-2">
                  by{" "}
                  <span className="text-teal-600 font-medium">
                    {post.author}
                  </span>{" "}
                  - {post.date}
                </p>

                <p className="text-primary text-sm my-2">{post.description}</p>
                <div className="px-3 inline-block py-1 bg-teal-500 text-foreground rounded-2xl">
                  <button>{post.status}</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center mt-30">
            <p className="text-5xl dark:text-teal-600">No posts available</p>
          </div>
        )}
      </div>

      <div>
        <div
          className={cn(
            `fixed inset-y-0 right-0 w-80 md:w-96 bg-background p-6 shadow-xl transform transition-transform duration-300  ${
              statusPostId ? "translate-x-0" : "translate-x-full"
            } text-gray-500 mt-5`
          )}>
          <button
            className="absolute cursor-pointer group top-4 right-4 "
            onClick={() => setStatusPostId(null)}>
            <XIcon className="group-hover:text-red-500 " />
          </button>
          {selectedPost ? (
            <div>
              <h3 className="text-3xl font-bold mb-4 text-blue-700 dark:text-teal-500">
                Post Details
              </h3>
              <p className="text-lg mb-2 text-gray-700 dark:text-gray-200">
                <span className="font-semibold">Post Title:</span>{" "}
                {selectedPost.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Author:</span>{" "}
                {selectedPost.author}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Current Status:</span>{" "}
                {selectedPost.status.toUpperCase()}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Current Category:</span>{" "}
                {/* {selectedPost.category.toUpperCase() || "Uncategorized"} */}
              </p>

              <h4 className="text-xl font-bold mb-4 mt-6">Change Status</h4>
              <div className="space-y-3">
                <button
                  onClick={() => handleSetStatus(selectedPost.id, "featured")}
                  className="w-full bg-yellow-500 text-white py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-200 font-semibold">
                  Featured এ সেট করুন
                </button>
                <button
                  onClick={() => handleSetStatus(selectedPost.id, "latest")}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 font-semibold">
                  Latest এ সেট করুন
                </button>
                <button
                  onClick={() => handleSetStatus(selectedPost.id, "popular")}
                  className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200 font-semibold">
                  Popular এ সেট করুন
                </button>
                <button
                  onClick={() => handleSetStatus(selectedPost.id, "normal")}
                  className="w-full bg-gray-400 text-white py-3 rounded-lg shadow-md hover:bg-gray-500 transition-colors duration-200 font-semibold">
                  Normal এ সেট করুন
                </button>
              </div>

              <h4 className="text-xl font-bold mb-4 mt-6">Change Category</h4>
              <div className="space-y-3">
                {category.map((category) => (
                  <button
                    key={category.id}
                    onClick={() =>
                      handleSetCategory(selectedPost.id, category.title)
                    }
                    className={cn(
                      "w-full py-3 bg-teal-500 text-black rounded-lg shadow-md hover:opacity-80 transition-colors duration-200 font-semibold"
                    )}>
                    {category.title.charAt(0).toUpperCase() +
                      category.title.slice(1)}{" "}
                    এ সেট করুন
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-center text-gray-500 dark:text-gray-400">
              <p>Select a post</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
