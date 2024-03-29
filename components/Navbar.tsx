'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
const Header = () => {
  const [state, setState] = React.useState(false);
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
    setState(false);
  };
  return (
    <nav className="sticky top-0 w-full grid grid-cols-3 p-2 bg-george-orange">
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
        <DropdownMenu open={state} onOpenChange={setState}>
          <DropdownMenuTrigger data-state={state}>
            <Menu size={32} className="text-white hover:text-george-lilac" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2 px-12 py-4">
            <DropdownMenuLabel
              className="text-2xl font-katarine text-george-lilac"
              onClick={() => handleNavigate('/')}
            >
              Home
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-2xl font-katarine"
              onClick={() => handleNavigate('/about')}
            >
              About
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-2xl font-katarine"
              onClick={() => handleNavigate('/team')}
            >
              Our Team
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-2xl font-katarine"
              onClick={() => handleNavigate('/contact')}
            >
              Contact Us
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Header;
