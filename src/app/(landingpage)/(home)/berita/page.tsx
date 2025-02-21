"use client";

import React from "react";
import { motion } from "framer-motion";
import { BeritaSection } from "@/components/ui/berita-section";

const posts = [
  {
    id: "post-1",
    title: "Getting Started with shadcn/ui Components",
    summary:
      "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
    label: "Tutorial",
    author: "Sarah Chen",
    published: "1 Jan 2024",
    url: "https://shadcnblocks.com",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-2",
    title: "Building Accessible Web Applications",
    summary:
      "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
    label: "Accessibility",
    author: "Marcus Rodriguez",
    published: "1 Jan 2024",
    url: "https://shadcnblocks.com",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-3",
    title: "Modern Design Systems with Tailwind CSS",
    summary:
      "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
    label: "Design Systems",
    author: "Emma Thompson",
    published: "1 Jan 2024",
    url: "https://shadcnblocks.com",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-4",
    title: "Getting Started with shadcn/ui Components",
    summary:
      "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
    label: "Tutorial",
    author: "Emma Thompson",
    published: "1 Jan 2024",
    url: "https://shadcnblocks.com",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
];

export default function Berita() {
  return (
    <section className="flex flex-col items-center justify-center w-full px-4 lg:px-16 py-40">
      <div className="mb-8 flex flex-col items-center justify-between md:mb-14 lg:mb-16">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-semibold tracking-tight text-balance text-gray-900 lg:text-7xl dark:text-gray-100"
          >
            Berita
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 mb-4 text-sm font-medium text-pretty text-gray-500 lg:text-xl/8"
          >
            Berita dari desa Tapos I, Kecamatan Tenjolaya
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full"
      >
        <BeritaSection posts={posts} />
      </motion.div>
    </section>
  );
}
