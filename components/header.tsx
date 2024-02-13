import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeaderProps {
  showHome: () => void;
  showAbout: () => void;
  showContact: () => void;
}

const Header = ({ showHome, showAbout, showContact }: HeaderProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-stone-50 w-full z-20">
      <div className=" bg-george-lime flex flex-col items-center justify-end p-4 w-full lg:w-1/4">
        <motion.div
          initial={{ x: '-100%', scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row gap-12 items-start justify-start text-george-black"
        >
          <button
            type="button"
            onClick={showHome}
            className="font-aptly text-2xl font-bold cursor-pointer hover:text-george-teal"
          >
            Home
          </button>
          <button
            type="button"
            onClick={showAbout}
            className="font-aptly text-2xl font-bold cursor-pointer hover:text-george-teal"
          >
            About
          </button>
          <button
            type="button"
            onClick={showContact}
            className="font-aptly text-2xl font-bold cursor-pointer hover:text-george-teal"
          >
            Contact
          </button>
        </motion.div>
      </div>
      <div className=" bg-george-purple relative p-4 w-full lg:w-3/4">
        <div className="flex-1 relative w-full h-full">
          {/* <Image
            src="/g2.svg"
            width={500}
            height={300}
            alt="George's House"
            className="mx-auto"
          /> */}
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="/g2.svg"
            alt="George's House"
            className="mx-auto max-w-xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
