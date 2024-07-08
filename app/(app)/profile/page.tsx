import { getLatestMood } from "@/actions/mood";
import { SingleLineChart } from "@/components/charts/line-chart";
import React from "react";

const ProfilePage = async () => {
  const latestMood = await getLatestMood();
  return (
    <div className="flex-1 h-full w-full p-2 text-3xl">
      Profile Page
      <p>Latest Mood: {latestMood.mood}</p>
      <SingleLineChart />
    </div>
  );
};

export default ProfilePage;
