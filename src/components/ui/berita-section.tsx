import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface BeritaProps {
  buttonText?: string;
  buttonUrl?: string;
  posts: Post[];
}

const BeritaSection = ({
  buttonText = "View all articles",
  posts = [
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
  ],
}: BeritaProps) => {
  return (
    <div>
      <div className="mx-auto max-w-8xl space-y-10">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden border-1 shadow bg-white dark:bg-black p-4 rounded-xl"
          >
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="shrink-0">
                <a
                  href={`/berita/${post.id}`}
                  className="block transition-opacity duration-200 hover:opacity-90"
                >
                  <Image
                    width={0}
                    height={0}
                    src={post.image}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-lg object-cover object-center sm:w-[260px]"
                  />
                </a>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex mb-2 items-center gap-4 text-sm text-muted-foreground">
                  <Badge variant="secondary">{post.label}</Badge>
                  <span>{post.author}</span>
                  <span>{post.published}</span>
                </div>
                <Link href={`/berita/${post.id}`}>
                  <h3 className="text-xl font-bold leading-tight lg:text-2xl hover:underline">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-base text-muted-foreground">
                  {post.summary}
                </p>
                <Link
                  href={`/berita/${post.id}`}
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Lihat detail
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto"
          asChild
        >
          <Link href="/">
            {buttonText}
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export { BeritaSection };
