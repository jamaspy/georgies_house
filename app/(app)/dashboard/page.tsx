import React from "react";
import { auth } from "@/auth";
import { NewUserNameModel } from "@/components/new-user-name-model/new-user-name-model";
import { MoodRating } from "@/components/complex";
import { getContent } from "@/actions/posts";
import { Post } from "@/models/sanity";
import { ArticleLink } from "@/components/complex";
import Link from "next/link";
import { AreaChartHero } from "@/components/charts/area-chart";
import { getAllMood } from "@/actions/mood";
import { Mood } from "@/database/xata";

export const revalidate = 3600;

function formatDate(dateString: Date) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0"); // adds leading zero if necessary
  const month = date.toLocaleString("en-us", { month: "short" }); // abbreviated month name
  const year = date.getFullYear().toString().slice(-2); // last two digits of the year

  return `${day} ${month} ${year}`;
}

const DashboardPage = async () => {
  const session = await auth();

  if (!session) {
    return (
      <div className="w-full text-center">You must log in to see this page</div>
    );
  }
  const getRecentPromise = getContent();
  const graphMoodsPromise = getAllMood();

  const [getRecentPosts, graphMoods] = await Promise.all([
    getRecentPromise,
    graphMoodsPromise,
  ]);

  const firstThreePosts = getRecentPosts.slice(0, 3);
  const moods = graphMoods.map((mood: any) => ({
    date: formatDate(mood.xata.createdAt),
    mood: mood.mood,
  }));

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
        <div className="flex-1 h-full flex flex-col gap-8">
          <div className="flex flex-row gap-2 items-center w-full justify-between mb-2 bg-george-orange text-white py-2 px-4 rounded-md">
            <p className="text-xl font-semibold">Mood Tracker</p>
          </div>
          <AreaChartHero chartData={moods} />
        </div>
        <div className="flex-1 h-full">
          <div className="flex flex-row gap-2 items-center w-full justify-between mb-2 bg-george-orange text-white py-2 px-4 rounded-md">
            <p className="text-xl font-semibold">Recent Articles</p>
            <Link
              href="/knowledge"
              className="text-xs text-white hover:text-george-lilac"
            >
              View all
            </Link>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            {firstThreePosts.map((post: Post) => (
              <ArticleLink
                key={post._id}
                title={post.title}
                summary={post.summary}
                author={post.author}
                createdAt={post._createdAt}
                categories={post.categories}
                slug={post.slug.current}
              />
            ))}
          </div>
          <div className="flex flex-row gap-2 items-center w-full justify-between mb-2 bg-george-orange text-white py-2 px-4 rounded-md">
            <p className="text-xl font-semibold">Upcoming Events</p>
            <Link
              href="/events"
              className="text-xs text-white hover:text-george-lilac"
            >
              View all
            </Link>
          </div>
          {/* TODO - Add upcoming events */}
          <div className="mb-4 flex flex-col gap-2">
            {firstThreePosts.map((post: Post) => (
              <ArticleLink
                key={post._id}
                title={post.title}
                summary={post.summary}
                author={post.author}
                createdAt={post._createdAt}
                categories={post.categories}
                slug={post.slug.current}
              />
            ))}
          </div>
        </div>
      </section>
      <NewUserNameModel session={session} />
    </div>
  );
};

export default DashboardPage;
