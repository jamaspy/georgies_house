"use server";

import { auth } from "@/auth";
import { client } from "@/database/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const updateUserName = async (name: string) => {
  const session = await auth();
  if (!session?.user?.id) {
    return null;
  }
  try {
    await client.db.nextauth_users.update(session?.user?.id, {
      name,
    });
    revalidatePath("/dashboard");
    return true;
  } catch (error) {
    console.error("Error updating user name", error);
    return null;
  }
};

export const handleSubmit = async (
  formData: FormData,
  setIsOpen: (state: boolean) => void
) => {
  console.log("Form data", formData.get("name"));
  const name = formData.get("name");
  if (name) {
    const success = await updateUserName(name as string);
    if (success) {
      // Redirect to /dashboard after successful update
      console.log("Name updated successfully", success);
      setIsOpen(false);
    } else {
      // Handle error case
      console.error("Error updating user name");
    }
  } else {
    console.error("Name not provided");
  }
};
