import React from 'react';
import Link from 'next/link';
import { Linkedin, Instagram } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="sticky bottom-0 bg-george-orange p-4 w-full">
      <div className="flex flex-row gap-8 text-white justify-center items-center">
        <a
          href="https://www.linkedin.com/company/georgie-s/about/"
          target="_blank"
          className="hover:text-george-lilac"
        >
          <Linkedin />
        </a>
        <a
          href="https://www.instagram.com/georgies.house/"
          target="_blank"
          className="hover:text-george-lilac"
        >
          <Instagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
