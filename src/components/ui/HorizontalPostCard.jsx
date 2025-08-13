import Image from "next/image";
import Link from "next/link";

export const HorizontalPostCard = ({ article }) => (
  <Link href={"#"} className="flex items-center gap-4 rounded-lg transition-colors cursor-pointer">
    <Image
    width={100}
    height={100}
      src={article.imageUrl}
      alt={article.title}
      className="w-[30%] object-cover rounded-lg"
    />
    <div>
      <h3 className="text-sm md:text-base font-bold hover:text-blue-600 line-clamp-2 text-gray-200">
        {article.title}
      </h3>
      <p className="text-xs text-gray-400 mt-1">{article.date}</p>
    </div>
  </Link>
);