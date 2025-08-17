import { cn } from "@/lib/utils";
import React from "react";

export default function MainTag({ className }) {
  return (
    <div>
      {" "}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          MAIN TAGS
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Gadgets", "Health", "Laptop", "Podcasts", "Reviews", "Travel"].map(
            (tag, index) => (
              <span
                key={index}
                className={cn(
                  "px-4 py-2 bg-gray-200 dark:bg-gray-800 text-foreground text-sm font-medium rounded-full cursor-pointer hover:bg-teal-500 transition-colors",
                  className
                )}>
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
