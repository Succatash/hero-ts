"use client";
import { Calendar, ClipboardPlus, Inbox, Search, Computer } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  // useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
// Menu items.
const items = [
  {
    title: "Forms",
    url: "/admin/dash/forms",
    icon: ClipboardPlus,
  },
  {
    title: "Edit",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Payments",
    url: "#",
    icon: Calendar,
  },
  {
    title: "analytics",
    url: "#",
    icon: Search,
  },
];

export function ContentSidebar() {
  // const {
  //   state,
  //   open,
  //   setOpen,
  //   openMobile,
  //   setOpenMobile,
  //   isMobile,
  //   toggleSidebar,
  // } = useSidebar();

  return (
    <Sidebar side="left" collapsible="icon">
      {/* /add hidden here */}
      <SidebarHeader className="">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Computer />
                <span>Hero of Israel CMS</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>test</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
