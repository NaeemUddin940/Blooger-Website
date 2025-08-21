"use client";

import * as React from "react";
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconInnerShadowTop,
  IconListDetails,
  IconUsers,
} from "@tabler/icons-react";
import { User as UserIcon } from "lucide-react"; // renamed to avoid clash
import Link from "next/link";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// ✅ Sidebar data
const data = {
  user: {
    name: "MD. NAEEM UDDIN",
    email: "mdnaeemuddin14@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "All Posts", url: "/admin/all-posts", icon: IconListDetails },
    {
      title: "Featured Posts",
      url: "/admin/featured",
      icon: IconDashboard,
    },
    { title: "Leatest Posts", url: "/admin/latest", icon: IconChartBar },
    { title: "Popular Posts", url: "/admin/popular", icon: IconFolder },
    { title: "Category", url: "/admin/category-lists", icon: IconUsers },
    { title: "Social Links", url: "/admin/status", icon: UserIcon },
  ],
};

export function AdminSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* Header Section */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">View Site</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Main Content */}
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      {/* Footer (User Info) */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
