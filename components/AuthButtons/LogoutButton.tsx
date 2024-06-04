"use client";
import { signOutUser } from "@/actions/auth";
import { LogIn, LogOut } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Session } from "next-auth";
import { cn } from "@/lib/utils";
const LogOutButton = ({
  session,
  className,
}: {
  session: Session | null;
  className?: string;
}) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("georgiesDevMode") === "true") {
      return null;
    }
  }

  if (!session) {
    return (
      <Link
        href="/auth/signin"
        className={cn(className, "flex flex-row gap-2 ml-auto")}
      >
        Log In <LogIn size={24} />
      </Link>
    );
  }
  return (
    <button
      onClick={() => signOutUser()}
      className={cn(className, "flex flex-row gap-2 hover:text-george-lilac")}
    >
      <LogOut size={24} />
    </button>
  );
};

export default LogOutButton;
