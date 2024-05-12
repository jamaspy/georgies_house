import Button from "@/components/AuthButtons/Button";
import { signInWithGoogle } from "@/actions/auth";
import { FcGoogle } from "react-icons/fc";
import { FaWandMagicSparkles } from "react-icons/fa6";
import Image from "next/image";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex flex-col gap-4 h-full w-full max-w-xl bg-neutral-100 rounded-lg shadow-md p-8">
      <Image
        src="/Logo_Orange_InvertedWhite.svg"
        alt="georgies house"
        width={150}
        height={30}
        className="mx-auto mb-4"
      />
      <Button
        onClick={signInWithGoogle}
        label="Sign in with Google"
        icon={<FcGoogle />}
      />
      <Button
        onClick={signInWithGoogle}
        label="Sign in with Magic Link"
        icon={<FaWandMagicSparkles />}
      />
    </div>
  );
};

export default SignInPage;
