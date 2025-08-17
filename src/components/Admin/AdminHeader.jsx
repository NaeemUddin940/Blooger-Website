import React from "react";
import { Globe, Search } from "lucide-react";
import Link from "next/link";
import profile from "../../../public/profile.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeSwitcher from "../ui/theme-switcher";

export default function AdminHeader() {
  return (
    <div className="flex justify-between shadow py-2 z-100 px-20">
      <Link href={"/"} className="flex items-center gap-2">
        <Globe size={30} />
        <h3 className="text-3xl font-bold">Newspot</h3>
      </Link>

      <div
        className={`flex bg-gray-300 dark:bg-gray-700  rounded-4xl transition-all duration-200 ease-in-out`}>
        <input
          type="search"
          className={`outline-none bg-transparent dark:placeholder:text-white rounded-4xl dark:text-white pl-5 w-200 transition-all duration-200`}
          placeholder="Search......"
        />
        <Search
          className="bg-violet-500 h-10 p-2 w-10 cursor-pointer rounded-full"
          color="#000000"
          absoluteStrokeWidth
        />
      </div>
      <div className="flex gap-3">
        <ThemeSwitcher />
        <Avatar>
          <AvatarImage src={profile.src} alt="profile" />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
