"use client";
import React, { useEffect, useState } from "react";
import {
  Earth,
  Moon,
  Search,
  Sun,
  AlignJustify,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Navbar() {
  const [activeSearch, setActiveSearch] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <header>
      <div className="px-5 shadow py-2 flex justify-center items-center bg-gray-100 dark:bg-gray-950">
        <div className="flex w-5xl justify-between  items-center">
          <div className={`flex items-center relative gap-10`}>
            <AlignJustify className="cursor-pointer lg:hidden text-black dark:text-white " />
            <Link href="/" className="flex items-center gap-2">
              <Earth color="#4217de" size={40} />
              <h1 className="text-3xl font-bold text-indigo-600">Newspot</h1>
            </Link>
            <div>
              <ul className="flex dark:text-gray-100 text-gray-950 gap-10 [&>li:hover]:text-violet-500 [&>li]:font-bold">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hoverState flex">
                    Category <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Health</DropdownMenuItem>
                    <DropdownMenuItem>Gadget</DropdownMenuItem>
                    <DropdownMenuItem>Technology</DropdownMenuItem>
                    <DropdownMenuItem>Podcast</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <li>
                  <Link href={"#"}>Mega Menu</Link>
                </li>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@nextjs</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                          The React Framework – created and maintained by
                          @vercel.
                        </p>
                        <div className="text-muted-foreground text-xs">
                          Joined December 2021
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <li>
                  <Link href={"#"}>Latest Post</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-5">
            <div
              className={`flex lg:flex items-center ${
                activeSearch && "hidden"
              } gap-2 items-center`}>
              {isDarkMode ? (
                <Moon
                  onClick={toggleTheme}
                  className="cursor-pointer"
                  color="#ffffff"
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                />
              ) : (
                <Sun
                  onClick={toggleTheme}
                  className="cursor-pointer"
                  color="#000000"
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                />
              )}
            </div>

            <div
              className={`flex bg-gray-200 dark:bg-gray-700 ${
                activeSearch && "active-search"
              } rounded-4xl transition-all duration-200 ease-in-out`}>
              <input
                type="search"
                className={`outline-none bg-transparent dark:placeholder:text-white dark:text-white p-0 w-0 transition-all duration-200`}
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
        </div>
      </div>
    </header>
  );
}
