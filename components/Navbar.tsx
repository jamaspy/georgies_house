import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
const Header = () => {
  return (
    <nav className="sticky top-0 w-full grid grid-cols-3 p-2 bg-george-orange">
      <div className="flex-1 col-span-1">
        <Image
          src="/Logo_Orange_InvertedWhite.svg"
          alt="georgies house"
          width={150}
          height={30}
          className=""
        />
      </div>
      <div className="z-30 hidden md:flex flex-row items-end justify-start gap-12 flex-1 col-span-2 font-katarine text-xl text-white">
        <Link
          className="hover:text-george-lilac font-semibold transition-all duration-200 ease-in"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:text-george-lilac font-semibold transition-all duration-200 ease-in"
          href="/team"
        >
          Our Team
        </Link>
        {/* <Link
          className="hover:text-george-lilac font-semibold transition-all duration-200 ease-in"
          href="/events"
        >
          Events
        </Link> */}
        <Link
          className="hover:text-george-lilac font-semibold transition-all duration-200 ease-in"
          href="/contact"
        >
          Contact
        </Link>
      </div>
      <div className="flex md:hidden ml-auto my-auto col-span-2">
        <Menu size={32} className="text-white hover:text-george-lilac" />
      </div>
    </nav>
  );
};

export default Header;
