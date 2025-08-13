"use client";
import React, { useEffect, useState } from "react";
import { Earth, Moon, Search, Sun, AlignJustify } from "lucide-react";
import Link from "next/link";

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
      <div className="px-3 shadow py-2 flex justify-center items-center bg-gray-100 dark:bg-gray-900">
        <div className="flex w-5xl justify-between  items-center">
          <div className={`flex items-center relative gap-4`}>
            <AlignJustify className="cursor-pointer lg:hidden text-black dark:text-white " />
            <Link href="/" className="flex items-center">
              <Earth color="#4217de" size={40} />
              <h1 className="text-3xl font-bold text-indigo-600">Newspot</h1>
            </Link>
          </div>

          <div className="flex gap-5">
            <div
              className={`flex lg:flex items-center ${activeSearch && "hidden"} gap-2 items-center`}>
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
              className={`flex bg-gray-100 dark:bg-gray-400 ${
                activeSearch && "active-search"
              } rounded-4xl transition-all duration-200 ease-in-out`}>
              <input
                type="search"
                className={`outline-none bg-transparent dark:placeholder:text-white p-0 w-0 transition-all duration-200`}
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
