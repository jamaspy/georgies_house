"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { DoorClosed, Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogOutButton from "@/components/AuthButtons/LogoutButton";
import { Session } from "next-auth";
const MobileAppNavbar = ({ session }: { session: Session | null }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="flex flex-col items-end justify-end md:hidden w-full p-4">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger className="ml-auto" asChild>
          <Menu size={36} />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <Image
                src="/Logo_Orange_InvertedWhite.svg"
                alt="georgies house"
                width={75}
                height={30}
                className="mx-auto mb-4"
              />
            </DrawerTitle>
          </DrawerHeader>
          <DrawerDescription className="w-full flex flex-row flex-wrap items-center justify-center gap-4">
            <Link
              onClick={() => setOpen(false)}
              href="/dashboard"
              className="hover:text-george-lilac text-slate-800"
            >
              Home
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/knowledge"
              className="hover:text-george-lilac text-slate-800"
            >
              Knowledge
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/community"
              className="hover:text-george-lilac text-slate-800"
            >
              Community
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/clinicians"
              className="hover:text-george-lilac text-slate-800"
            >
              Clinicians
            </Link>
          </DrawerDescription>
          <DrawerFooter className="flex flex-row items-center justify-center">
            <Link href="/profile">
              <User size={24} />
            </Link>
            <LogOutButton session={session} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default MobileAppNavbar;
