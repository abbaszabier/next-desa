"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface DarkModeProps {
  className?: string;
}

export function DarkMode({ className }: DarkModeProps) {
  const { setTheme, theme } = useTheme();

  const handleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={`w-8 h-8 dark:border-gray-700 ${className}`}
      onClick={handleDarkMode}
      title="Tema Gelap"
    >
      <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
