"use client";
import React from "react";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { AuthButtons } from "../AuthButtons";
import { Session } from "next-auth";

const MobileNavbar = ({ session }: { session: Session | null }) => {
  const shadow = localStorage.getItem("georgiesDevMode") === "false";
  const [state, setState] = React.useState(false);
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
    setState(false);
  };
  return (
    <div className="flex md:hidden ml-auto my-auto col-span-2">
      <DropdownMenu open={state} onOpenChange={setState}>
        <DropdownMenuTrigger data-state={state}>
          <Menu size={32} className="text-white hover:text-george-lilac" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 px-12 py-4">
          <DropdownMenuLabel
            className="text-2xl font-katarine text-george-lilac"
            onClick={() => handleNavigate("/")}
          >
            Home
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-2xl font-katarine"
            onClick={() => handleNavigate("/about")}
          >
            About
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-2xl font-katarine"
            onClick={() => handleNavigate("/team")}
          >
            Our Team
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-2xl font-katarine"
            onClick={() => handleNavigate("/contact")}
          >
            Contact Us
          </DropdownMenuItem>
          {!shadow && (
            <DropdownMenuItem className="text-2xl font-katarine">
              <AuthButtons session={session} />
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNavbar;
