import { useBlogContext } from "@/context/BlogContext";
import { posts } from "@/Data/db";

export default function Categories() {
  const { allposts } = useBlogContext();
  const categorisWithCount = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  // console.log(categorisWithCount);

  // const categoryAndStatusWisedPosts = allposts.reduce((acc, post) => {
  //   if (!acc[post.category] && !acc[post.status]) {
  //     acc[post.category && post.status] = { posts: [], count: 0 };
  //   }
  //   acc[post.category && post.status].posts.push(post);
  //   acc[post.category && post.status].count++;
  //   return acc;
  // }, {});

  // console.log(categoryAndStatusWisedPosts);

  return (
    <div>
      {" "}
      <div className="mb-4">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          CATEGORIES
        </h2>
        <ul className="flex flex-col gap-2">
          {Object.entries(categorisWithCount).map(([categories, count]) => (
            <li
              key={categories}
              className="flex justify-between items-center text-gray-400 hover:text-teal-500  transition-colors cursor-pointer">
              <span>{categories}</span>
              <span className="text-sm text-gray-500">{count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
