import React from "react";
import MobileNavbar from "./MobileNavbar";
import WebNavbar from "./WebNavbar";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full grid grid-cols-3 p-2 bg-george-orange">
      <WebNavbar />
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
