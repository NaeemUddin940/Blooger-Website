"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useBlogContext } from "../../context/BlogContext";
import AdminPostCard from "./AdminPostCard";

export default function page() {
  const { category, allposts, setStatusPostId, setTabId } = useBlogContext();

  return (
    <div className="px-5 grid grid-cols-2">
      {category.length > 0 && (
        <Tabs defaultValue={category[0].title} className="flex flex-col">
          <TabsList>
            {category.map((cat) => (
              <TabsTrigger
                key={cat?.id}
                onClick={() => setTabId(cat?.id)}
                value={cat?.title}>
                {cat?.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {category.map((cat) => (
            <TabsContent key={cat?.title} value={cat?.title}>
              {allposts
                .filter((post) => post.category === cat?.title)
                .map((post) => (
                  <AdminPostCard
                    key={post?.title}
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
