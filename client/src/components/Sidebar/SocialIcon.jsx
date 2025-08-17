import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

export default function SocialIcon() {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-2 gap-2">
        <button className="flex items-center cursor-pointer justify-center p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
          <Facebook size={20} className="mr-2" /> Facebook
        </button>
        <button className="flex items-center cursor-pointer justify-center p-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors">
          <Youtube size={20} className="mr-2" /> Youtube
        </button>
        <button className="flex items-center cursor-pointer justify-center p-3 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors">
          <Twitter size={20} className="mr-2" /> Twitter
        </button>
        <button className="flex items-center cursor-pointer justify-center p-3 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors">
          <Instagram size={20} className="mr-2" /> Instagram
        </button>
      </div>
    </div>
  );
}
