"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AuroraBackground } from "../ui/aurora-background";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSettingsStore } from "@/store/settings";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Data Populasi",
    href: "/populasi",
    description: "Sebaran penduduk",
  },
  {
    title: "Data Pendidikan",
    href: "/pendidikan",
    description: "Sebaran pendidikan",
  },
  {
    title: "Data Pekerjaan",
    href: "/pekerjaan",
    description: "Sebaran pekerjaan",
  },
  {
    title: "Perkawinan",
    href: "/perkawinan",
    description: "Sebaran perkawinan",
  },
  {
    title: "Data Usia",
    href: "/usia",
    description: "Sebaran usia",
  },
  {
    title: "Data Daftar Pemilih Tetap",
    href: "/dpt",
    description: "Jumlah DPT",
  },
];

export function Navlink() {
  const { setIsOpen } = useSettingsStore((state) => state);
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <NavigationMenu className="flex flex-col lg:flex-1">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              active={isActive("/")}
              className={navigationMenuTriggerStyle()}
            >
              Beranda
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${
              isActive("/sejarah-desa") ||
              isActive("/visi-misi") ||
              isActive("/peta") ||
              isActive("/galeri-foto")
                ? "text-primary font-bold"
                : ""
            }`}
          >
            Profil Desa
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 lg:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link href="/sejarah-desa" passHref>
                    <AuroraBackground className="h-[208px] cursor-pointer">
                      <motion.div className="cursor-pointer flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md">
                        <Image
                          src="/images/icons/icon-128x128.png"
                          width={48}
                          height={48}
                          alt={""}
                        />
                        <div className="mb-2 mt-4 text-lg font-medium leading-none dark:text-white">
                          Sejarah Desa
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Lihat informasi sejarah desa.
                        </p>
                      </motion.div>
                    </AuroraBackground>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/visi-misi" title="Visi dan Misi">
                Lihat Visi dan Misi Desa.
              </ListItem>
              <ListItem href="/peta" title="Peta">
                Lihat peta desa
              </ListItem>
              <ListItem href="/galeri-foto" title="Galeri">
                Lihat galeri desa
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${
              isActive("/populasi") ||
              isActive("/pendidikan") ||
              isActive("/pekerjaan") ||
              isActive("/perkawinan") ||
              isActive("/usia") ||
              isActive("/dpt")
                ? "text-primary font-bold"
                : ""
            }`}
          >
            Data Statistik
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 lg:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr] xs:grid-rows-2">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pemerintahan" legacyBehavior passHref>
            <NavigationMenuLink
              active={isActive("/pemerintahan")}
              className={navigationMenuTriggerStyle()}
            >
              Pemerintahan
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/tupoksi" legacyBehavior passHref>
            <NavigationMenuLink
              active={isActive("/tupoksi")}
              className={navigationMenuTriggerStyle()}
            >
              Tupoksi
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/produk-hukum" legacyBehavior passHref>
            <NavigationMenuLink
              active={isActive("/produk-hukum")}
              className={navigationMenuTriggerStyle()}
            >
              Produk Hukum
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/berita" legacyBehavior passHref>
            <NavigationMenuLink
              active={isActive("/berita")}
              className={navigationMenuTriggerStyle()}
            >
              Berita
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/destinasi" legacyBehavior passHref>
            <NavigationMenuLink
              active={isActive("/destinasi")}
              className={navigationMenuTriggerStyle()}
            >
              Destinasi
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/lapak-desa" legacyBehavior passHref>
            <NavigationMenuLink
              active={isActive("/lapak-desa")}
              className={navigationMenuTriggerStyle()}
            >
              Lapak Desa
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <div
            onClick={() => setIsOpen(true)}
            className={`cursor-pointer ${navigationMenuTriggerStyle()}`}
          >
            Hubungi Kami
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-50 hover:text-accent-foreground focus:bg-zinc-50 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
