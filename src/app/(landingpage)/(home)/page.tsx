import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Hero from "./components/hero";
import { Apatur } from "@/components/ui/apatur";
import { BeritaDanArtikel } from "@/components/ui/beritaDanArtikel";
import { StatistikData } from "@/components/ui/statistik-data";
import Galeri from "./components/galeri";
import IdentitasDesa from "./components/identitas-desa";
import JadwalKerja from "./components/jadwal-kerja";
import MapDesa from "./components/map";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full dark:bg-black bg-white dark:bg-grid-white/[0.15] bg-grid-black/[0.08] relative flex items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <BackgroundBeamsWithCollision className="relative flex flex-col z-20">
        <div className="flex flex-col">
          <Hero />
          <div className="w-full h-fit mb-4 px-4 md:px-16">
            <div className="bg-[#F5F5F5]/60 dark:bg-gray-900 dark:bg-opacity-60 ring-1 ring-gray-900/5 dark:ring-gray-50/15 grid md:grid-cols-[25%_1fr] gap-y-[10px] p-4 h-fit w-fit gap-x-[10px] rounded-2xl">
              <div className="bg-white ring-1 ring-gray-100 w-full rounded-2xl space-y-8 p-4 dark:bg-black dark:ring-gray-100/10">
                <Apatur />
                <IdentitasDesa />
                <JadwalKerja />
                <MapDesa />
              </div>
              <div className="bg-white ring-1 ring-gray-100 w-full rounded-2xl p-4 space-y-8 dark:bg-black dark:bg-opacity-60 dark:ring-gray-100/10">
                <BeritaDanArtikel />
                <StatistikData />
                <Galeri />
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
