"use server";

import { Post } from "@/models/sanity";
import { client } from "@/sanity/lib/client";

export async function getContent() {
  const CONTENT_QUERY = `*[_type == "post"]{
    ...,
    "author": author->,
    "categories": categories[]->title
  } | order(_createdAt desc)
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}
