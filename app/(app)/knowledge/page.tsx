import React from "react";
import { getContent } from "@/actions/posts";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export const revalidate = 20;

const KnowledgePage = async () => {
  const posts = await getContent();
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {posts.map((post: any, i: number) => (
        <BentoGridItem
          key={post.title}
          title={post.title}
          description={post.summary}
          header={post.mainImage}
          slug={post.slug.current}
          categories={post.categories}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};

export default KnowledgePage;
