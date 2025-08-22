import { useBlogContext } from "@/context/BlogContext";
import Link from "next/link";

export default function Categories() {
  const { allposts } = useBlogContext();

  const categoryAndStatusWisedPosts = allposts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    acc[post.status] = (acc[post.status] || 0) + 1;

    return acc;
  }, {});

  return (
    <div>
      {" "}
      <div className="mb-4">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          CATEGORIES
        </h2>
        <ul className="flex flex-col gap-2">
          {Object.entries(categoryAndStatusWisedPosts).map(
            ([categories, count]) => (
              <Link
                key={categories}
                href={`/all-posts/${categories}`}
                className="flex justify-between group items-center text-gray-400 hover:text-teal-500  transition-colors cursor-pointer">
                <span>{categories}</span>
                <span className="hidden group-hover:block">
                  --------------------------
                </span>
                <span>{count}</span>
              </Link>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
