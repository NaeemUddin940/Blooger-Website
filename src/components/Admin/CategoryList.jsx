"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useBlogContext } from "../../context/BlogContext";
import Image from "next/image";
import AdminPostCard from "./AdminPostCard";

export default function page() {
  const { category, allposts, setStatusPostId } = useBlogContext();

  return (
    <div className="px-5">
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
                  <AdminPostCard
                    key={post.id}
                    post={post}
                    setStatusPostId={setStatusPostId}
                  />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
