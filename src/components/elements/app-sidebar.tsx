import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Beranda",
      url: "/dashboard",
    },
    {
      title: "Data Statistik",
      url: "/dashboard/data-statistik",
      items: [
        {
          title: "Populas",
          url: "/dashboard/data-statistik/populasi",
        },
        {
          title: "Pendidikan",
          url: "/dashboard/data-statistik/pendidikan",
          isActive: true,
        },
        {
          title: "Pekerjaan",
          url: "/dashboard/data-statistik/pekerjaan",
        },
        {
          title: "Perkawinan",
          url: "/dashboard/data-statistik/perkawinan",
        },
        {
          title: "Usia",
          url: "/dashboard/data-statistik/usia",
        },
        {
          title: "Daftar Pemilih Tetap",
          url: "/dashboard/data-statistik/dpt",
        },
      ],
    },
    {
      title: "Produk Hukum",
      url: "/dashboard/produk-hukum",
    },
    {
      title: "Berita",
      url: "/dashboard/berita",
    },
    {
      title: "Destinasi",
      url: "/dashboard/destinasi",
    },
    {
      title: "Lapak Desa",
      url: "/dashboard/lapak-desa",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Dashboard Admin</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
