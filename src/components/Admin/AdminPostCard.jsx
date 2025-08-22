import Image from "next/image";
import React from "react";
import { useCapitalize } from "../../Hooks/useCapitalize";
import { Edit, Trash2 } from "lucide-react";
import { useBlogContext } from "@/context/BlogContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/Firebase/Firebase";

export default function AdminPostCard({ post, setStatusPostId }) {
  const { allposts, setAllPosts } = useBlogContext();

  const handleDelete = async (postId) => {
    try {
      const postRef = doc(db, "posts", postId);

      // Firestore থেকে delete
      await deleteDoc(postRef);

      // UI থেকেও remove
      setAllPosts(allposts.filter((post) => post._id !== postId));

      console.log("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="flex justify-between shadow-sm p-2 dark:shadow-gray-700 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out items-start gap-5 cursor-pointer my-3">
      <div
        onClick={() => setStatusPostId(post._id)}
        className="flex gap-5 w-9/10">
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
            by <span className="text-teal-600 font-medium">{post.author}</span>{" "}
            - {post.date}
          </p>
          <p className="text-primary text-sm my-2">{post.description}</p>
          <div className="px-3 inline-block py-1 bg-teal-500 text-foreground rounded-2xl">
            <button>{useCapitalize(post.status)}</button>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <Edit className="hover:text-blue-500" />
        <Trash2
          onClick={() => handleDelete(post._id)}
          className="hover:text-red-500"
        />
      </div>
    </div>
  );
}
