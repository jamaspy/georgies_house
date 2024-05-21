import React from "react";
import { getContent } from "@/actions/posts";
import { ArticleLink } from "@/components/complex/";
import { Post } from "@/models/sanity";

export const revalidate = 20;

const KnowledgePage = async () => {
  const posts = await getContent();
  console.log("🚀  HERE>>>>>> :  : KnowledgePage : posts:", posts);
  return (
    <div className="h-full w-full p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post: Post) => (
        <ArticleLink
          key={post._id}
          title={post.title}
          summary={post.summary}
          author={post.author}
          createdAt={post._createdAt}
          slug={post.slug.current}
        />
      ))}
    </div>
  );
};

export default KnowledgePage;
