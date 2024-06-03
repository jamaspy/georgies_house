import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import LogOutButton from "@/components/AuthButtons/LogoutButton";
import { User } from "lucide-react";
import MobileAppNavbar from "./MobileAppNavbar";
const AppNavbar = async () => {
  const session = await auth();
  return (
    <>
      <nav className="hidden md:flex w-full p-4 bg-neutral-50 flex-row items-center justify-start gap-8">
        <Image
          src="/Logo_Orange_InvertedWhite.svg"
          alt="georgies house"
          width={150}
          height={30}
          className="mr-auto mb-4"
        />
        <div className="flex flex-row items-center justify-start gap-8 w-full">
          <Link href="/dashboard" className="hover:text-george-lilac">
            Home
          </Link>
          <Link href="/knowledge" className="hover:text-george-lilac">
            Knowledge
          </Link>
          <Link href="/community" className="hover:text-george-lilac">
            Community
          </Link>
          <Link href="/clinicians" className="hover:text-george-lilac">
            Clinicians
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Link
            href="/profile"
            className="hover:text-george-lilac flex flex-row items-center gap-2 justify-center"
          >
            <User size={24} />
          </Link>
          <LogOutButton session={session} />
        </div>
      </nav>
      <MobileAppNavbar session={session} />
    </>
  );
};

export default AppNavbar;
