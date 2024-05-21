import { Post } from "@/models/sanity";
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import { RichTextComponents } from "@/components/complex/articles";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const query = groq`
    *[_type == "post"]{
      slug
    }
   `;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({ slug }));
}

const ArticlePage = async ({ params: { slug } }: BlogPostProps) => {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0]{
      ...,
       author->,
      "categories": categories[]->title
    }
   `;
  const post = await client.fetch(query, { slug });

  return (
    <div className="flex-1 h-full w-full p-2">
      <div className="h-60 overflow-hidden rounded-lg">
        <Image
          src={post?.mainImage && urlForImage(post?.mainImage)}
          width={1000}
          height={500}
          alt={post?.title}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <p className="text-4xl text-center font-black mb-4">{post.title}</p>
      <PortableText value={post?.body} components={RichTextComponents} />
      <p className="text-xs text-slate-600 text-center">
        {`Published by ${post?.author?.name}: ${new Date(
          post?._createdAt
        ).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })} `}
      </p>
    </div>
  );
};

export default ArticlePage;
