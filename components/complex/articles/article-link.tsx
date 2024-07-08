"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Author } from "@/models/sanity";
import { Badge } from "@/components/ui/badge";
interface ArticleLinkProps {
  title: string;
  summary: string;
  slug: string;
  author: Author;
  createdAt: string;
  categories: string[];
}

export function ArticleLink({
  title,
  summary,
  slug,
  author,
  createdAt,
  categories,
}: Readonly<ArticleLinkProps>) {
  const router = useRouter();
  return (
    <button
      type="button"
      className=" text-left rounded p-2 border w-full cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-300"
      onClick={() => router.push(`/knowledge/${slug}`)}
    >
      <p className="text-md font-semibold">{title}</p>
      <div className="flex flex-row gap-2 my-2">
        {categories.map((category) => (
          <Badge
            variant="secondary"
            className="text-xs font-thin"
            key={category}
          >
            #{category}
          </Badge>
        ))}
      </div>
      <p className="text-sm">{summary}</p>
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-george-orange text-xs font-semibold">
          {`Published by ${author?.name}`} on{" "}
          {new Date(createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
        </p>
      </div>
    </button>
  );
}
