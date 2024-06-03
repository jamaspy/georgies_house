import { getLatestMood } from "@/actions/mood";
import React from "react";

const ProfilePage = async () => {
  const latestMood = await getLatestMood();
  console.log("🚀  HERE>>>>>> :  : ProfilePage : latestMood:", latestMood);
  return (
    <div className="flex-1 h-full w-full p-2 text-3xl">
      Profile Page
      <p>Latest Mood: {latestMood.mood}</p>
    </div>
  );
};

export default ProfilePage;
