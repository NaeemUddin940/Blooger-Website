import Image from "next/image";
import Link from "next/link";

export default function HorizontalPostBigCard({ post }) {
  return (
    <Link
      href={`/${post.category}/${post.id}`}
      className="flex hover:scale-[1.02] dark:shadow-gray-700 shadow-sm hover:shadow-lg hover:rounded-lg transition-transform duration-300 ease-in-out items-start gap-5 cursor-pointer my-1">
      <div className="relative flex-shrink-0 ">
        <Image
          src={post.image}
          alt={post.title}
          height={100}
          width={100}
          className="w-full md:w-48 h-32 object-cover"
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
          by <span className="text-teal-600 font-medium">{post.author}</span> -{" "}
          {/* {post.data.createdAt?.toDate().toLocaleDateString()} */}
        </p>
        <p className="text-primary lg:block text-sm mt-3 hidden">
          {post.description}
        </p>
      </div>
    </Link>
  );
}
