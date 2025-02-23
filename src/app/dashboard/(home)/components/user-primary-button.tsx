import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface UsersPrimaryButtonsProps {
  title: string;
}

export function UsersPrimaryButtons({ title }: UsersPrimaryButtonsProps) {
  return (
    <div className="flex gap-2">
      <Button variant="black" className="text-white">
        <Plus size={18} /> <span>{title}</span>
      </Button>
    </div>
  );
}
