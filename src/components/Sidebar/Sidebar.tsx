"use client";
import { ContactRound, HatGlasses, Home, ListCollapse, ListOrdered, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MenuList = [
  {
    icon: Home,
    title: "Home",
    href: "/",
  },
  {
    icon: ListCollapse,
    title: "About Us",
    href: "/about-us",
  },
  {
    icon: ContactRound,
    title: "Contact Us",
    href: "/contact-us",
  },
  {
    icon: HatGlasses,
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
];

// The Sidebar component itself.
export function Sidebar() {
  // State to manage which menus are open.
  const [openMenus, setOpenMenus] = useState({
    Category: false,
    MegaMenu: false,
  });

  // Function to toggle the state of a specific menu.
  const toggleMenu = (menuName: "Category" | "MegaMenu") => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  return (
    // Sidebar Container
    <>
      <ul className="w-full py-10">
        <div className="grid">
          {MenuList.map((menu) => (
            <Link key={menu.title} href={menu.href} className="hoverState ">
              <li className="w-full flex gap-5 items-center p-3 text-base font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-200 focus:outline-none">
                <menu.icon />
                {menu.title}
              </li>
            </Link>
          ))}
        </div>

        <li className="mt-2">
          <button
            onClick={() => toggleMenu("Category")}
            className="w-full flex justify-between items-center p-3 text-base font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-200 focus:outline-none">
            <div className="flex items-center gap-5">
              {/* SVG Icon for Products */}
              <ShoppingBasket />
              Category
            </div>
            {/* Arrow Icon for Collapse/Expand */}
            <svg
              className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${
                openMenus.Category ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {/* Sub-items for Products */}
          <ul
            className={`pl-4 mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
              openMenus.Category ? "max-h-96" : "max-h-0"
            }`}>
            <li>
              <a
                href="#"
                className="block p-2 text-sm text-gray-400 rounded-md hover:bg-gray-700 transition duration-200">
                All Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 text-sm text-gray-400 rounded-md hover:bg-gray-700 transition duration-200">
                New Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 text-sm text-gray-400 rounded-md hover:bg-gray-700 transition duration-200">
                Categories
              </a>
            </li>
          </ul>
        </li>

        {/* Category 3: MegaMenu (Collapsible) */}
        <li className="mt-2">
          <button
            onClick={() => toggleMenu("MegaMenu")}
            className="w-full flex justify-between items-center p-3 text-base font-medium rounded-md hover:bg-gray-700 transition duration-200 focus:outline-none">
            <div className="flex items-center gap-5">
              {/* SVG Icon for MegaMenu */}
              <ListOrdered />
              MegaMenu
            </div>
            {/* Arrow Icon for Collapse/Expand */}
            <svg
              className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${
                openMenus.MegaMenu ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {/* Sub-items for MegaMenu */}
          <ul
            className={`pl-4 mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
              openMenus.MegaMenu ? "max-h-96" : "max-h-0"
            }`}>
            <li>
              <a
                href="#"
                className="block p-2 text-sm text-gray-400 rounded-md hover:bg-gray-700 transition duration-200">
                Pending MegaMenu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 text-sm text-gray-400 rounded-md hover:bg-gray-700 transition duration-200">
                Completed MegaMenu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 text-sm text-gray-400 rounded-md hover:bg-gray-700 transition duration-200">
                Refunds
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
