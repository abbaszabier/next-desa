import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, KeyRound } from "lucide-react";
import { Navlink } from "./link";
import { DarkMode } from "../theme-provider/dark-mode";
import Link from "next/link";

export function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex lg:hidden">
        <Button variant="outline">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <Navlink />
        <SheetFooter className="mt-2">
          <div className="flex w-full items-center gap-2">
            <DarkMode className="w-full" />
            <Link href="/login" className="w-full">
              <Button
                variant="outline"
                className="w-full h-8 dark:border-gray-700"
                title="Login Admin"
              >
                <KeyRound className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
