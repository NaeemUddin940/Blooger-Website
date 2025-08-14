import Link from "next/link";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
export default function SocialMedia() {
  return (
    <div className="grid grid-cols-4 gap-5 lg:">
      <Link
        href="#"
        className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-colors">
        <Facebook size={20} className="text-gray-400 hover:text-black" />
      </Link>
      <Link
        href="#"
        className="p-3 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors">
        <Twitter size={20} className="text-gray-400 hover:text-black" />
      </Link>
      <Link
        href="#"
        className="p-3 bg-gray-800 rounded-full hover:bg-red-500  transition-colors">
        <Youtube size={20} className="text-gray-400 hover:text-black" />
      </Link>
      <Link
        href="#"
        className="p-3 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
        <Instagram size={20} className="text-gray-400 hover:text-black" />
      </Link>
    </div>
  );
}
