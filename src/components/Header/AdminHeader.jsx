"use client";
import React from "react";
import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/Sheet";
import { Button } from "../ui/button";
import { Sidebar } from "../Sidebar/Sidebar";

export default function AdminHeader() {
  const [activeSearch, setActiveSearch] = React.useState(false);
  return (
    <div className="flex justify-between shadow py-2">
      <Sheet>
        <SheetTrigger asChild className="cursor-pointer">
          <Button variant="outline">
            <Menu size={30} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <Sidebar />
        </SheetContent>
      </Sheet>
      <div
        className={`flex bg-gray-300 dark:bg-gray-700 ${
          activeSearch && "active-search-max"
        } rounded-4xl transition-all duration-200 ease-in-out`}>
        <input
          type="search"
          className={`outline-none bg-transparent dark:placeholder:text-white rounded-4xl dark:text-white p-0 w-0 transition-all duration-200`}
          placeholder="Search......"
        />
        <Search
          onClick={() => setActiveSearch((prev) => !prev)}
          className="bg-violet-500 h-10 p-2 w-10 cursor-pointer rounded-full"
          color="#000000"
          absoluteStrokeWidth
        />
      </div>
    </div>
  );
}
