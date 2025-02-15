import { cn } from "@/lib/utils";

export const ArtikelGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ArtikelGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl cursor-pointer group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black bg-white border justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex items-center gap-2 text-xs">
          {icon} Sabtu, 22 Februari 2025
        </div>
        <div className="font-bold text-black dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-normal text-neutral-500 text-xs dark:text-neutral-400">
          {description}
        </div>
      </div>
    </div>
  );
};
