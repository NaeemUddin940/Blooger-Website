"use client";

import React from "react";
import { IconCirclePlusFilled } from "@tabler/icons-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface NavMainItem {
  title: string;
  url: string;
  icon?: React.ElementType;
}

interface NavMainProps {
  items: NavMainItem[];
}

export function NavMain({ items }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        {/* Create Post Button */}
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <SidebarMenuButton className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear">
                  <Link href="/admin/create-post" className="flex w-full gap-5 items-center">
                    <IconCirclePlusFilled className="w-4 h-4" />
                    <span>Create Posts</span>
                  </Link>
                </SidebarMenuButton>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Create Posts</p>
              </TooltipContent>
            </Tooltip>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Dynamic Nav Items */}
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.url}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent  side="right">
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
