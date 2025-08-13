"use client";

import * as React from "react";
import Link from "next/link";
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Globe,
  Menu,
  Moon,
  Search,
  Sun,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: {
  src: string;
  title: string;
  href: string;
  description: string;
}[] = [
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5O0ZY2WIUUAlZZC1w0fk2DRsAIiW2bqh1NrdKtCa4v3BibsgoJFnA_f6jEYLAMXKbDu8sMIMhwrD0vKXj7-JElNqK87Pxi0joMtMElNRaAFFGD-AvNzMw2fn02QfwSWw7UPBsD899wTI/s16000/pbt66.jpg",
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5O0ZY2WIUUAlZZC1w0fk2DRsAIiW2bqh1NrdKtCa4v3BibsgoJFnA_f6jEYLAMXKbDu8sMIMhwrD0vKXj7-JElNqK87Pxi0joMtMElNRaAFFGD-AvNzMw2fn02QfwSWw7UPBsD899wTI/s16000/pbt66.jpg",
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5O0ZY2WIUUAlZZC1w0fk2DRsAIiW2bqh1NrdKtCa4v3BibsgoJFnA_f6jEYLAMXKbDu8sMIMhwrD0vKXj7-JElNqK87Pxi0joMtMElNRaAFFGD-AvNzMw2fn02QfwSWw7UPBsD899wTI/s16000/pbt66.jpg",
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5O0ZY2WIUUAlZZC1w0fk2DRsAIiW2bqh1NrdKtCa4v3BibsgoJFnA_f6jEYLAMXKbDu8sMIMhwrD0vKXj7-JElNqK87Pxi0joMtMElNRaAFFGD-AvNzMw2fn02QfwSWw7UPBsD899wTI/s16000/pbt66.jpg",
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
];

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { Sidebar } from "../Sidebar/Sidebar";

export function Navigation() {
  const [activeSearch, setActiveSearch] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  // Load saved theme on mount
  React.useEffect(() => {
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
    <div className="flex justify-center pl-2 z-100 py-2 shadow-sm dark:shadow-accent-foreground pr-5">
      <div className="flex justify-between w-5xl">
        <div className="flex items-center cursor-pointer lg:hidden">
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
        </div>
        <NavigationMenu viewport={false}>
          {/* Icon And Heading Section */}
          <NavigationMenuList>
            <Link href={"/"} className="flex items-center gap-2">
              <Globe size={30} />
              <h3 className="text-3xl font-bold">Newspot</h3>
            </Link>
          </NavigationMenuList>

          <NavigationMenuList className="lg:ml-3 hidden lg:flex">
            {/* Home Section */}
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}>
              <Link href="/">Home</Link>
            </NavigationMenuLink>

            {/* Category Section */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Category</NavigationMenuTrigger>
              <NavigationMenuContent className="z-100">
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Health</div>
                        <div className="text-muted-foreground">
                          World Best Health Conscious tips.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Gadget</div>
                        <div className="text-muted-foreground">
                          Modern Gadget Here You will Found.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Technology</div>
                        <div className="text-muted-foreground">
                          Advanced Technology You can Adventure.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Mega Menu Section */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Mega Menu</NavigationMenuTrigger>
              <NavigationMenuContent className="z-100 tansform -translate-x-[35%]">
                <ul className="grid gap-2 md:grid-cols-4 items-center w-250 ">
                  {components.map((component) => (
                    <div key={component.title}>
                      <Link href={component.href} className="overflow-x-auto">
                        <Image
                          width={300}
                          height={300}
                          src={component.src}
                          alt={component.title}
                        />
                        <div className="text-sm leading-none font-medium p-2">
                          {component.title}
                        </div>
                        <p className="text-muted-foreground px-2 line-clamp-2 text-sm leading-snug">
                          {component.description}
                        </p>
                      </Link>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
              <NavigationMenuContent className="z-100">
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Components</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Documentation</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Blocks</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
              <NavigationMenuContent className="z-100">
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <CircleHelpIcon />
                        Backlog
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <CircleIcon />
                        To Do
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <CircleCheckIcon />
                        Done
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
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
        </NavigationMenu>
      </div>
    </div>
  );
}
