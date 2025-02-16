import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex w-full max-w-sm items-center hidden lg:flex">
      <Input
        type="text"
        placeholder="Cari artikel..."
        className="rounded-r-none h-8 dark:border-gray-700"
      />
      <Button
        variant="black"
        type="submit"
        className="rounded-l-none h-8 w-8 text-white dark:text-black dark:bg-white dark:hover:bg-white/90"
      >
        <Search />
      </Button>
    </div>
  );
}
