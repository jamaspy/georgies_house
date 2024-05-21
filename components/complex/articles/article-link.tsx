"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Author } from "@/models/sanity";
interface ArticleLinkProps {
  title: string;
  summary: string;
  slug: string;
  author: Author;
  createdAt: string;
}

export function ArticleLink({
  title,
  summary,
  slug,
  author,
  createdAt,
}: Readonly<ArticleLinkProps>) {
  const router = useRouter();
  return (
    <button
      type="button"
      className=" text-left rounded p-2 border w-full cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-300"
      onClick={() => router.push(`/knowledge/${slug}`)}
    >
      <p className="text-md font-semibold">{title}</p>
      <p className="text-sm">{summary}</p>
      <p className="text-george-orange text-xs">
        {`Published by ${author?.name}`} on{" "}
        {new Date(createdAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
      </p>
    </button>
  );
}
