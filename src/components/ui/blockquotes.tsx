import React from "react";
import { cn } from "@/lib/utils";

type BlockquoteProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Blockquote({ children, className }: BlockquoteProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg border border-l-8 border-l-black bg-transparent py-4 pl-14 pr-5 text-md italic leading-relaxed text-gray-500 before:absolute before:left-3 before:top-3 before:text-6xl before:text-black before:content-['“']",
        className
      )}
    >
      {children}
    </div>
  );
}
