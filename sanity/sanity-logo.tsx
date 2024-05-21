import Logo from "@/public/Logo_Orange.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const SanityLogo = () => {
  return (
    <Link href="/">
      <Image
        src="/Logo_Orange_InvertedWhite.svg"
        alt="georgies house"
        width={150}
        height={30}
        className="mx-auto mb-4"
      />
    </Link>
  );
};
