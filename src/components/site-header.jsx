"use client";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { db } from "@/Firebase/Firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

export function SiteHeader() {
  const [inputValue, setInputValue] = useState("");

  const collectionRef = collection(db, "categoryList");

  const addCategory = async () => {
    if (inputValue.trim() === "") return;

    try {
      await addDoc(collectionRef, { title: inputValue });
      setInputValue(""); // input clear
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    addCategory();
  };

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full justify-between items-center gap-5 px-4 lg:gap-2 lg:px-6">
        <div className="flex mr-10">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <h1 className="text-base font-medium">Admin Panel</h1>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button className="cursor-pointer">
              <Plus />
              Add Category
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex justify-center gap-4 items-center">
            <form onSubmit={formSubmit}>
              <input
                name="category"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="px-2 py-1.5 w-45 border-2 rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
                type="text"
                placeholder="Add Category"
              />

              <Button type="submit" className="cursor-pointer">
                Add
              </Button>
            </form>
          </PopoverContent>
        </Popover>

        <div className="ml-auto  gap-2">
          <Avatar className="cursor-pointer">
            <AvatarImage src="../../public/profile.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
