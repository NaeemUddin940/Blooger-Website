"use client";
import { useParams } from "next/navigation";
import { useBlogContext } from "../../../context/BlogContext";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { db } from "../../../Firebase/Firebase";
import CategoryList from "../../../components/Admin/CategoryList";
import { doc, updateDoc } from "firebase/firestore";
import AdminPostCard from "../../../components/Admin/AdminPostCard";
import AdminSidebar from "../../../components/Admin/AdminSidebar";

export default function Page() {
  const { status } = useParams();

  const {
    allposts,
    category,
    setAllPosts,
    statusPostId,
    setStatusPostId,
    loading,
  } = useBlogContext();

  const selectedPost = allposts.find((post) => post._id === statusPostId);

  // Helper function to safely capitalize strings

  // Update post status
  const handleSetStatus = async (postId, newStatus) => {
    try {
      const postRef = doc(db, "posts", String(postId));
      await updateDoc(postRef, { status: newStatus });

      // Update local state for real-time UI update
      setAllPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, status: newStatus } : post
        )
      );

      console.log("Status updated successfully!");
    } catch (error) {
      console.error("Error updating status:", error.message);
    }
  };

  // Update post category
  const handleSetCategory = async (postId, newCategory) => {
    console.log(postId, newCategory);
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, { category: newCategory });

      setAllPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, category: newCategory } : post
        )
      );

      alert("Category updated successfully!");
    } catch (error) {
      console.error("Error updating category:", error.message);
    }
  };

  const filteredPosts = allposts.filter((post) => post.status === status);

  const postToShow = status === "all-posts" ? allposts : filteredPosts;
  console.log(postToShow);
  return (
    <div>
      {status === "category-lists" ? (
        <CategoryList />
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-5 px-5">
          {loading ? (
            <div className="flex justify-center items-center mt-30">
              <p className="text-5xl dark:text-teal-600">Loading....</p>
            </div>
          ) : postToShow.length === 0 ? (
            <div className="flex justify-center items-center mt-30">
              <p className="text-5xl dark:text-teal-600">No posts found</p>
            </div>
          ) : (
            postToShow.map((post) => (
              <AdminPostCard
                key={post._id}
                post={post}
                setStatusPostId={setStatusPostId}
              />
            ))
          )}
        </div>
      )}

      {/* Right Sidebar */}
      <div>
        <div
          className={cn(
            `fixed inset-y-0 right-0 overflow-y-auto w-80 md:w-96 bg-background p-6 shadow-xl transform transition-transform duration-300 ${
              statusPostId ? "translate-x-0" : "translate-x-full"
            } text-gray-500`
          )}>
          <button
            className="absolute cursor-pointer group top-4 right-4"
            onClick={() => setStatusPostId(null)}>
            <XIcon className="group-hover:text-red-500" />
          </button>

          {selectedPost ? (
            <AdminSidebar
              selectedPost={selectedPost}
              category={category}
              handleSetStatus={handleSetStatus}
              handleSetCategory={handleSetCategory}
            />
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
