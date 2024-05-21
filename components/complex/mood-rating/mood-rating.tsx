"use client";
import React from "react";
import { Meh, Smile, Frown, Laugh, Angry } from "lucide-react";
import { MoodCircle } from "./mood-circle";

export const MoodRating = () => {
  return (
    <div className="flex flex-row gap-2">
      <MoodCircle value={5}>
        <Laugh className="w-[1.2rem] h-[1.2rem] text-green-600 " />
      </MoodCircle>
      <MoodCircle value={4}>
        <Smile className="w-[1.2rem] h-[1.2rem] text-yellow-500" />
      </MoodCircle>
      <MoodCircle value={3}>
        <Meh className="w-[1.2rem] h-[1.2rem] text-yellow-600" />
      </MoodCircle>
      <MoodCircle value={2}>
        <Frown className="w-[1.2rem] h-[1.2rem] text-orange-500" />
      </MoodCircle>
      <MoodCircle value={1}>
        <Angry className="w-[1.2rem] h-[1.2rem] text-red-600" />
      </MoodCircle>
    </div>
  );
};

export default MoodRating;
