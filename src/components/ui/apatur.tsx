"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
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
      <div className="flex bg-gray-100 p-4 rounded-lg justify-between items-center mb-2">
        <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
          <User /> Apatur
        </h2>
      </div>
      <Carousel plugins={[plugin.current]} className="">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="h-[25rem] md:h-[20rem] ">
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
