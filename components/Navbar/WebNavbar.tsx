import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOutUser } from "@/actions/auth";
import { LogOut } from "lucide-react";
import LogOutButton from "../AuthButtons/LogoutButton";
import { auth } from "@/auth";

const WebNavbar = async () => {
  const session = await auth();
  return (
    <>
      <Link href="/" className="flex-1 col-span-1">
        <Image
          src="/Logo_Orange_InvertedWhite.svg"
          alt="georgies house"
          width={150}
          height={30}
          className=""
        />
      </Link>
      <div className="z-30 hidden md:flex flex-row items-end justify-start gap-12 flex-1 col-span-2 font-katarine text-xl text-white">
        <Link
          className="hover:text-george-lilac font-semibold transition-all duration-200 ease-in"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:text-george-lilac font-semibold transition-all duration-200 ease-in"
          href="/about"
        >
          About
        </Link>
        <Link
          className="hover:text-george-lilac font-semibold transition-all duration-200 ease-in"
          href="/team"
        >
          Our Team
        </Link>

        <Link
          className="hover:text-george-lilac font-semibold transition-all duration-200 ease-in"
          href="/contact"
        >
          Contact
        </Link>
        {session && (
          <Link
            className="hover:text-george-lilac font-semibold transition-all duration-200 ease-in"
            href="/dashboard"
          >
            Georgies App
          </Link>
        )}
        {/* <LogOutButton className="ml-auto" session={session} /> */}
      </div>
    </>
  );
};

export default WebNavbar;
