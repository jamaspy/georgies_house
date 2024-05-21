import React from "react";
import { auth } from "@/auth";
import { NewUserNameModel } from "@/components/new-user-name-model/new-user-name-model";
import { MoodRating } from "@/components/complex";
import { getContent } from "@/actions/posts";
import { Post } from "@/models/sanity";
import { ArticleLink } from "@/components/complex";

const DashboardPage = async () => {
  const session = await auth();

  if (!session) {
    return (
      <div className="w-full text-center">You must log in to see this page</div>
    );
  }
  const posts = await getContent();
  console.log("🚀  HERE>>>>>> :  : DashboardPage : posts:", posts[0].body);

  return (
    <div className="flex-1 h-full w-full p-2">
      <section className="flex flex-col justify-between px-4">
        <h1 className="text-3xl font-bold mb-1">
          {" "}
          Hi
          {session?.user?.name
            ? `, ${session?.user?.name.split(" ")[0]}`
            : "there"}{" "}
          👋🏼
        </h1>
        <div className="flex flex-col">
          <p className="text-sm text-neutral-600 mb-1">
            How you feeling today?
          </p>
          <MoodRating />
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-4 mt-8 px-4">
        <div className="flex-1 rounded-md shadow p-2 h-full flex flex-col gap-2">
          <p className="text-xl font-semibold">Recent Articles</p>
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
        <div className="flex-1 border rounded-md p-2 h-full">
          <p className="text-xl font-semibold">Upcoming Events</p>
        </div>
      </section>
      <NewUserNameModel session={session} />
    </div>
  );
};

export default DashboardPage;
