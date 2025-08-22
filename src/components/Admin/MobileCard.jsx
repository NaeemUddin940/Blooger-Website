import { useCapitalize } from "@/Hooks/useCapitalize";
import { LucideCalendarDays, LucideTag, LucideUser } from "lucide-react";
import Image from "next/image";

export default function MobileCard({ post, setStatusPostId }) {
  return (
    <div onClick={() => setStatusPostId(post._id)} className="md:hidden">
      {/* Postcard container */}
      <div className="bg-background hover:scale-[1.02] p-1 dark:shadow-gray-700 shadow-sm hover:shadow-lg transition-transform duration-300 ease-in-out  flex flex-col">
        {/* Top section: Image and Status/Category, arranged side-by-side */}
        <div className="flex justify-evenly gap-5">
          {/* Image on the left */}
          <Image
            height={100}
            width={100}
            src={post.image}
            alt={post.title}
            className="w-2/4 h-40 object-cover "
          />

          {/* Status and Category on the right */}
          <div className=" flex flex-col space-y-2 text-foreground">
            <div className="flex items-center space-x-1">
              <LucideTag size={20} className="sm:size-4" />
              <span className="text-2xl font-bold">
                {" "}
                {useCapitalize(post.category)}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-2xl font-bold">
                {useCapitalize(post.status)}
              </span>
            </div>
            <div className="text-gray-500 text-xs sm:text-sm flex justify-between items-center space-x-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-1">
                <LucideUser size={14} className="text-gray-400" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <LucideCalendarDays size={14} />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: Title, Description, Author, and Date */}
        <div className="p-6 flex flex-col space-y-4">
          {/* Title and Description */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-foregorund mb-2">
              {post.title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {post.description}
            </p>
          </div>

          {/* Author and Date at the bottom */}
        </div>
      </div>
    </div>
  );
}
