"use server";

import { auth, signIn, signOut } from "@/auth";

export async function getServerSession() {
  const session = await auth();
  return session;
}

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/dashboard" });
}

export async function signInWithEmail(formData: any) {
  await signIn("resend", formData, { redirectTo: "/dashboard" });
}

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}
