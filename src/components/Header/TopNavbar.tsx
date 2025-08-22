import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function TopNavbar() {
  return (
    <section className="hidden px-5 lg:flex justify-center bg-gray-100 dark:bg-zinc-900 text-black dark:text-gray-50 py-1">
      <div className="flex justify-between w-5xl">
        <div>
          <ul className="flex gap-5 [&>li:hover]:text-violet-500">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <Link href="#" className="hover:text-[#1877F2]">
            <Facebook size={20} />
          </Link>
          <Link href="#" className="hover:text-[#FF0000]">
            <Youtube size={20} />
          </Link>
          <Link href="#" className="hover:text-[#1DA1F2]">
            <Twitter size={20} />
          </Link>
          <Link href="#" className="hover:text-[#E4405F]">
            <Instagram size={20} />
          </Link>
          <Link href="#" className="hover:text-[#0A66C2]">
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
