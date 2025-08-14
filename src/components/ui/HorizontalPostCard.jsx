import Image from "next/image";
import Link from "next/link";

export const HorizontalPostCard = ({ article }) => (
  <Link
    href={"#"}
    className="flex hover:scale-[1.02] p-1 hover:rounded-lg hover:shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]
 transition-transform duration-300 ease-in-out items-center gap-4 cursor-pointer">
    <Image
      width={100}
      height={100}
      src={article.imageUrl}
      alt={article.title}
      className="w-[30%] object-cover"
    />
    <div>
      <h3 className="text-sm md:text-base font-bold hover:text-blue-600 line-clamp-2 text-foreground">
        {article.title}
      </h3>
      <p className="text-xs text-primary mt-1">{article.date}</p>
    </div>
  </Link>
);
