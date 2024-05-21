import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full min-h-96 mx-auto">
        <Image src={urlForImage(value)} alt="Blog Post Image" fill />
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value?.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;
      return (
        <Link
          href={value?.href}
          rel={rel}
          className="underline text-purple-600 decoration-purple-600 hover:decoration-purple-800"
        >
          {children}
        </Link>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold mb-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-bold mb-4">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-base font-bold mb-4">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-sm font-bold mb-4">{children}</h6>
    ),
    p: ({ children }: any) => <p className="mb-4">{children}</p>,
    normal: ({ children }: any) => <p className="mb-4">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="ml-12 py-4 italic border-l-4 border-gray-300">
        {children}
      </blockquote>
    ),
  },
};
