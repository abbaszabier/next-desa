"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";

export function Apatur() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-100 p-4 rounded-lg justify-between items-center mb-2 dark:bg-gray-900 dark:ring-gray-100">
        <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
          <User /> Apatur
        </h2>
      </div>
      <Carousel plugins={[plugin.current]} className="">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center w-full h-96 md:h-[20rem] rounded-lg bg-gray-50">
                <p>Foto {index + 1}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
