"use client";
import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { data } from "@/components/elements/app-sidebar";
import { ProfileDropdown } from "@/app/dashboard/(home)/components/profile-dropdown";
import DateTime from "../ui/datetime";

interface NavItem {
  title: string;
  url: string;
  items?: NavItem[];
}

export default function HeaderDashboard() {
  const pathname = usePathname();

  const findBreadcrumbs = (path: string, items: NavItem[]): NavItem[] => {
    for (const item of items) {
      if (item.url === path) {
        return [item];
      }
      if (item.items) {
        const subPath = findBreadcrumbs(path, item.items);
        if (subPath.length) {
          return [item, ...subPath];
        }
      }
    }
    return [];
  };

  const breadcrumbs = findBreadcrumbs(pathname, data.navMain);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b">
      <div className="flex items-center justify-between w-full pr-4">
        <div className="flex gap-2 px-3 items-center">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.url}>
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={crumb.url}>
                        {crumb.title}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex gap-2 items-center">
          <DateTime className="text-sm" />
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}
