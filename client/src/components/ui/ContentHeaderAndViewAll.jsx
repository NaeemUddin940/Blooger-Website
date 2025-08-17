"use Client";
import Link from "next/link";

export default function ContentHeaderAndViewAll({ HeaderTitle, path }) {
  return (
    <div className="flex justify-between border-b-1 border-foreground mt-2">
      <div className="bg-primary inline-block px-3 py-1 font-bold dark:border-b-black uppercase text-background">
        {" "}
        {HeaderTitle}
      </div>
      <Link
        href={path}
        className="text-foreground cursor-pointer hover:text-blue-500">
        View All
      </Link>
    </div>
  );
}
