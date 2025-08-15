import Image from "next/image";
import Link from "next/link";

export const HorizontalPostCard = ({ article }) => (
  <Link
    href={"#"}
    className="flex hover:scale-[1.02] p-1 shadow-sm hover:shadow-lg hover:rounded-lg transition-transform duration-300 ease-in-out items-center gap-4 cursor-pointer">
    <Image
      src={article?.image}
      alt={article.title}
      width={100}
      height={100}
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
