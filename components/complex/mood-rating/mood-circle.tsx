"use client";
import { createMood } from "@/actions/mood";
import React from "react";
import { toast } from "sonner";

const createMoodRecord = async (mood: number) => {
  try {
    const record = await createMood(mood);
    console.log(record);
    toast.success("Mood Updated");
    return record;
  } catch (error) {
    toast.error("Create Mood Record Error");
    console.error("Create Mood Record Error:", error);
  }
};

export const MoodCircle = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: number;
}) => {
  return (
    <button
      onClick={() => createMoodRecord(value)}
      className="cursor-pointer border border-neutral-300 w-[2rem] h-[2rem] bg-slate-50 shadow rounded-full p-1 flex items-center justify-center hover:bg-slate-200"
    >
      {children}
    </button>
  );
};
