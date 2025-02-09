import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full dark:bg-black bg-white dark:bg-grid-white/[0.15] bg-grid-black/[0.08] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <BackgroundBeamsWithCollision>
        <Hero />
      </BackgroundBeamsWithCollision>
    </div>
  );
}
