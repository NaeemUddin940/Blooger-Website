import Image from "next/image";
import Link from "next/link";

export const HorizontalPostSmallCard = ({ post }) => (
  <Link
    href={`/${post.category}/${post.id}`}
    className="flex hover:scale-[1.02] p-1 dark:shadow-gray-700 shadow-sm hover:shadow-lg hover:rounded-lg transition-transform duration-300 ease-in-out items-center gap-4 cursor-pointer">
    <Image
      src={post.image}
      alt={post.title}
      width={100}
      height={100}
      className="w-[30%] h-15 object-cover"
    />
    <div>
      <h3 className="text-sm md:text-base font-bold hover:text-teal-400 line-clamp-2 text-foreground">
        {post.title}
      </h3>
      <p className="text-xs text-primary mt-1">{post.date}</p>
    </div>
  </Link>
);
