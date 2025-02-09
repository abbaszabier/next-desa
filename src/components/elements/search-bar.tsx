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
      <Button type="submit" className="rounded-l-none h-8">
        <Search />
      </Button>
    </div>
  );
}
