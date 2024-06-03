import React from "react";
import MobileNavbar from "./MobileNavbar";
import WebNavbar from "./WebNavbar";
import { getServerSession } from "@/actions/auth";

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <nav className="sticky top-0 w-full grid grid-cols-3 p-2 bg-george-orange">
      <WebNavbar />
      <MobileNavbar session={session} />
    </nav>
  );
};

export default Navbar;
