"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { useBlogContext } from "../../../context/BlogContext";
import Image from "next/image";

export default function page() {
  const { category, allposts, handleClick } = useBlogContext();

  return (
    <div className="flex items-center justify-between px-5">
      {category.length > 0 && (
        <Tabs defaultValue={category[0].title} className="flex flex-col">
          <TabsList>
            {category.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.title}>
                {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {category.map((cat) => (
            <TabsContent key={cat.id} value={cat.title}>
              {allposts
                .filter((post) => post.category === cat.title)
                .map((post) => (
                  <div
                    key={post.title}
                    onClick={() => handleClick(post.id)}
                    className="flex shadow-sm p-2 dark:shadow-gray-700 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300  ease-in-out items-start gap-5 cursor-pointer my-3">
                    <div className="relative flex-shrink-0 ">
                      <Image
                        src={post.image}
                        alt={post.title}
                        height={100}
                        width={100}
                        className="w-50 h-32 object-cover"
                      />
                      {/* Tag over the image */}
                      <span className="absolute bottom-2 left-2 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 mt-4 md:mt-0">
                      <h3 className="text-lg md:text-xl hover:text-teal-400 font-extrabold leading-tight text-primary">
                        {post.title}
                      </h3>
                      <p className="text-sm text-primary mt-2">
                        by{" "}
                        <span className="text-teal-600 font-medium">
                          {post.author}
                        </span>{" "}
                        - {post.date}
                      </p>

                      <p className="text-primary text-sm my-2">
                        {post.description}
                      </p>
                      <div className="px-3 inline-block py-1 bg-teal-500 text-foreground rounded-2xl">
                        <button>{post.status}</button>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
