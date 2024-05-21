"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card
      className="w-full cursor-pointer max-h-36"
      onClick={() => router.push(`/knowledge/${slug}`)}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="">{summary}</CardDescription>
        <CardDescription className="text-george-orange">
          {`Published by ${author?.name}`} on{" "}
          {new Date(createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
        </CardDescription>
      </CardHeader>
      {/* <CardFooter className="flex justify-between">
        <Button
      
          variant="outline"
        >
          Read more
        </Button>
      </CardFooter> */}
    </Card>
  );
}
