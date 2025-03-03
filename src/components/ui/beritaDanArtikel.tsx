import React from "react";
import { ArtikelGrid, ArtikelGridItem } from "./artikel-grid";
import { ArrowRight, Copy, Newspaper } from "lucide-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full h-[10rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <Copy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <Copy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <Copy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <Copy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <Copy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <Copy className="h-4 w-4 text-neutral-500" />,
  },
];

export function BeritaDanArtikel() {
  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-100 p-4 rounded-lg justify-between items-center mb-2 dark:bg-gray-900 dark:ring-gray-100">
        <h2 className="flex items-center gap-2 text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">
          <Newspaper /> Berita Terbaru
        </h2>
        <button className="flex items-center gap-1 text-xs text-primary dark:text-primary">
          Lihat Semua <ArrowRight size={14} />
        </button>
      </div>
      <ArtikelGrid>
        {items.map((item, i) => (
          <ArtikelGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
          />
        ))}
      </ArtikelGrid>{" "}
    </div>
  );
}
