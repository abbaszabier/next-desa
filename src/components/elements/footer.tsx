import Image from "next/image";
import React from "react";
interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

export default function Footer({
  logo = {
    src: "/images/icons/icon-128x128.png",
    alt: "blocks for shadcn/ui",
    title: "",
    url: "https://www.shadcnblocks.com",
  },
  tagline = "Website desa dibangun dengan tujuan sebagai media pelayanan publik resmi desa, yang dibangun dan dikelola oleh tim desa setempat. Dengan memanfaatkan website penyelenggaraan pelayanan publik dapat dilakukan secara cepat dan mudah.",
  copyright = `© 2025 Copyright. All rights reserved.`,
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: FooterProps) {
  return (
    <footer
      className="w-full py-6 px-12 bg-white/50 backdrop-blur-md dark:bg-black/50 dark:bg-opacity-80
      dark:border-t dark:border-gray-700"
    >
      <div className="flex w-full">
        <div className="flex w-full items-center flex-col justify-center">
          <div className="flex items-center justify-center gap-2 lg:justify-start">
            <a href="https://shadcnblocks.com">
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-12 w-12"
                width={60}
                height={60}
              />
            </a>
            <p className="text-xl font-semibold">{logo.title}</p>
          </div>
          <p className="mt-4 text-sm max-w-md text-center font-medium text-gray-500 dark:text-gray-300">
            {tagline}
          </p>
          <div className="mt-4 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="border border-gray-200 rounded-full p-2 group hover:border-primary transition-all"
              >
                <Image
                  src="https://shadcnblocks.com/images/block/logos/shadcn-ui-small.svg"
                  alt="company logo"
                  width={0}
                  height={0}
                  className="h-4 w-4 saturate-0 transition-all group-hover:saturate-100"
                />
              </a>
              <a
                href="#"
                className="border border-gray-200 rounded-full p-2 group hover:border-primary transition-all"
              >
                <Image
                  src="https://shadcnblocks.com/images/block/logos/typescript-small.svg"
                  alt="company logo"
                  width={0}
                  height={0}
                  className="h-4 w-4 saturate-0 transition-all group-hover:saturate-100"
                />
              </a>

              <a
                href="#"
                className="border border-gray-200 rounded-full p-2 group hover:border-primary transition-all"
              >
                <Image
                  src="https://shadcnblocks.com/images/block/logos/react-icon.svg"
                  width={0}
                  height={0}
                  alt="company logo"
                  className="h-4 w-4 saturate-0 transition-all group-hover:saturate-100"
                />
              </a>
              <a
                href="#"
                className="border border-gray-200 rounded-full p-2 group hover:border-primary transition-all"
              >
                <Image
                  src="https://shadcnblocks.com/images/block/logos/tailwind-small.svg"
                  width={0}
                  height={0}
                  alt="company logo"
                  className="h-4 w-4 saturate-0 transition-all group-hover:saturate-100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-center lg:justify-between gap-4 border-t pt-6 text-sm font-medium text-muted-foreground lg:flex-row lg:items-center">
        <p className="text-center">{copyright}</p>
        <ul className="flex items-center justify-center gap-4">
          {bottomLinks.map((link, linkIdx) => (
            <li key={linkIdx} className="underline hover:text-primary">
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
