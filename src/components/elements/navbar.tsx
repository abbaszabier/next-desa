import { SearchBar } from "./search-bar";
import { DarkMode } from "../theme-provider/dark-mode";
import DateTime from "../ui/datetime";
import { Button } from "../ui/button";
import { KeyRound } from "lucide-react";
import Image from "next/image";
import { Navlink } from "./link";
import { HamburgerMenu } from "./hamburger-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-col w-full md:px-12 py-1 border-b border-gray-200 dark:border-gray-700 bg-white/50 backdrop-blur-md dark:bg-black/50 dark:bg-opacity-80">
        {/* Header */}
        <div className="relative py-2 text-base">
          <div className="flex justify-between items-center px-4">
            <Image
              className="dark:invert w-[198px] h-[40px]"
              aria-hidden
              src="/logo-dark.svg"
              alt="Globe icon"
              width={0}
              height={0}
            />
            <div className="gap-2 items-center hidden md:flex">
              <DateTime />
              <div className="w-[1px] h-6 mx-2 bg-gray-200 dark:bg-gray-700" />
              <DarkMode />
              <Link href="/login">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-8 h-8 dark:border-gray-700"
                  title="Login Admin"
                >
                  <KeyRound className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all" />
                </Button>
              </Link>
            </div>
            <HamburgerMenu />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <SearchBar />
          </div>
        </div>
      </nav>

      <nav
        className="sticky top-0 z-50 w-full px-12 py-1 shadow bg-white/50 backdrop-blur-md dark:bg-black/50 dark:bg-opacity-80
      dark:border-b dark:border-gray-700 dark:shadow-lg hidden md:block"
      >
        <Navlink />
      </nav>
    </>
  );
}
