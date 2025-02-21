"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

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

export default function BeritaDetail() {
  const params = useParams();
  const berita = posts.find((post) => post.id === params?.id);
  const otherPosts = posts.filter((post) => post.id !== params?.id).slice(0, 3);

  if (!berita) {
    return <p className="text-center mt-10">Berita tidak ditemukan.</p>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <div className="p-4 border border-gray-200 rounded-lg shadow-sm col-span-2 bg-white dark:bg-black dark:border-gray-700">
        <div className="flex gap-2 items-center">
          <h1 className="text-3xl font-bold">{berita.title}</h1>
        </div>
        <p className="text-gray-500 mt-2">
          {berita.author} • {berita.published}
        </p>
        <Image
          width={0}
          height={0}
          src={berita.image}
          alt={berita.title}
          className="rounded-lg mt-4 w-full h-96 object-cover"
        />
        <p className="mt-4 text-lg">{berita.summary}</p>
        <div className="mt-6">
          <Button variant="outline" asChild>
            <Link href="/berita">Kembali ke List Berita</Link>
          </Button>
        </div>
      </div>

      <div className="hidden md:block p-4 border h-fit border-gray-200 rounded-lg shadow-sm bg-white dark:bg-black dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Berita Lainnya</h2>
        <ul className="space-y-4">
          {otherPosts.map((post) => (
            <li key={post.id} className="border-b pb-4 last:border-none">
              <Link
                href={`/berita/${post.id}`}
                className="flex gap-4 items-start"
              >
                <Image
                  width={100}
                  height={100}
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-24 rounded-md object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-gray-500 text-sm">
                    {post.author} • {post.published}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
