"use server";

import { auth } from "@/auth";
import { client } from "@/database/client";
import { formatXataResponse } from "@/utils/formatXataResponse";
import { revalidatePath } from "next/cache";

export const createMood = async (mood: number) => {
  const session = await auth();
  try {
    const update = await client.db.mood.create({
      user: session?.user?.id,
      mood,
    });
    revalidatePath("/dashboard");

    return formatXataResponse(update);
  } catch (error) {
    console.error("Update Mood Error:", error);
  }
};

export const getLatestMood = async () => {
  const session = await auth();
  if (!session) {
    return null;
  }
  try {
    const records = await client.db.mood
      .filter({ user: session?.user?.id })
      .sort("xata.updatedAt", "desc")
      .getAll();

    if (records.length > 0) {
      return formatXataResponse(records[0]);
    } else {
      console.log("No records found for the user");
      return null;
    }
  } catch (error) {
    console.error("Get Latest Mood Error:", error);
  }
};
export const getAllMood = async () => {
  const session = await auth();
  if (!session) {
    return null;
  }
  try {
    const records = await client.db.mood
      .filter({ user: session?.user?.id })
      .sort("xata.updatedAt", "desc")
      .getAll();

    if (records.length > 0) {
      return formatXataResponse(records);
    } else {
      console.log("No records found for the user");
      return [];
    }
  } catch (error) {
    console.error("Get Latest Mood Error:", error);
  }
};
