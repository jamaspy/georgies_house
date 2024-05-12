import Button from "@/components/AuthButtons/Button";
import { signInWithGoogle } from "@/actions/auth";
import { FcGoogle } from "react-icons/fc";
import { FaWandMagicSparkles } from "react-icons/fa6";
import Image from "next/image";
import React from "react";
import { signIn } from "@/auth";
import { Input } from "@/components/ui/input";

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
      <form
        action={async (formData) => {
          "use server";
          await signIn("resend", formData);
        }}
      >
        <Input type="text" name="email" placeholder="Email" className="mb-2" />
        <button
          className="border p-2 rounded-md flex flex-row items-center justify-center gap-3 pr-2 ml-auto font-semibold hover:bg-neutral-200 w-full"
          type="submit"
        >
          <FaWandMagicSparkles />
          Sign in with Magic Link
        </button>
      </form>

      <p className="my-2 font-semibold text-center text-george-orange">OR</p>
      <Button
        onClick={signInWithGoogle}
        label="Sign in with Google"
        icon={<FcGoogle />}
      />
    </div>
  );
};

export default SignInPage;
