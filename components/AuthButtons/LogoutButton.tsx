"use client";
import { signOutUser } from "@/actions/auth";
import { LogIn, LogOut } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Session } from "next-auth";

const LogOutButton = ({ session }: { session: Session | null }) => {
  if (!session) {
    return (
      <Link href="/signin" className="flex flex-row gap-2 ml-auto">
        Log In <LogIn size={24} />
      </Link>
    );
  }
  return (
    <button
      onClick={() => signOutUser()}
      className="flex flex-row gap-2 ml-auto"
    >
      Logout <LogOut size={24} />
    </button>
  );
};

export default LogOutButton;
