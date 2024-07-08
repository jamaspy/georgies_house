import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";
import type { Image as SanityImage } from "@sanity/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 md:max-w-7xl  mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  slug,
  categories,
}: {
  className?: string;
  slug: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: SanityImage;
  icon?: React.ReactNode;
  categories?: string[];
}) => {
  return (
    <Link
      href={`/knowledge/${slug}`}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-start flex flex-col space-y-4",
        className
      )}
    >
      <div className="h-24 rounded overflow-hidden">
        <Image
          src={
            (header && (urlForImage(header) as string)) || "/Logo_Orange.svg"
          }
          width={300}
          height={50}
          alt={title as string}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex flex-row gap-2 flex-wrap">
          {categories?.map((category) => (
            <Badge
              variant="secondary"
              className="text-xs font-thin"
              key={category}
            >
              #{category}
            </Badge>
          ))}
        </div>

        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </Link>
  );
};
