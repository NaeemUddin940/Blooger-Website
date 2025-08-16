"use client"
import { ListOrdered, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// The Sidebar component itself.
export function Sidebar() {
  // State to manage which menus are open.
  const [openMenus, setOpenMenus] = useState({
    products: false,
    orders: false,
  });

  // Function to toggle the state of a specific menu.
  const toggleMenu = (menuName: "products" | "orders") => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  return (
    // Sidebar Container
    <>
      <ul className="w-full py-10">
        <Link href={"/"} className="hoverState ">
          <li className="w-full dark:hover:bg-gray-800 hover:bg-gray-300 px-5 py-2 cursor-pointer">
            Home
          </li>
        </Link>
        <li className="mt-2">
          <button
            onClick={() => toggleMenu("products")}
            className="w-full flex justify-between items-center p-3 text-base font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-200 focus:outline-none">
            <div className="flex items-center gap-5">
              {/* SVG Icon for Products */}
              <ShoppingBasket />
              Products
            </div>
            {/* Arrow Icon for Collapse/Expand */}
            <svg
              className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${
                openMenus.products ? "rotate-180" : "rotate-0"
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
              openMenus.products ? "max-h-96" : "max-h-0"
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

        {/* Category 3: Orders (Collapsible) */}
        <li className="mt-2">
          <button
            onClick={() => toggleMenu("orders")}
            className="w-full flex justify-between items-center p-3 text-base font-medium rounded-md hover:bg-gray-700 transition duration-200 focus:outline-none">
            <div className="flex items-center gap-5">
              {/* SVG Icon for Orders */}
              <ListOrdered/>
              Orders
            </div>
            {/* Arrow Icon for Collapse/Expand */}
            <svg
              className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${
                openMenus.orders ? "rotate-180" : "rotate-0"
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
          {/* Sub-items for Orders */}
          <ul
            className={`pl-4 mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
              openMenus.orders ? "max-h-96" : "max-h-0"
            }`}>
            <li>
              <a
                href="#"
                className="block p-2 text-sm text-gray-400 rounded-md hover:bg-gray-700 transition duration-200">
                Pending Orders
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 text-sm text-gray-400 rounded-md hover:bg-gray-700 transition duration-200">
                Completed Orders
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
