import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { updateUserName } from "@/actions/user";
import { redirect } from "next/navigation";

const SignInPage = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    if (name) {
      const success = await updateUserName(name as string);
      if (success) {
        // Redirect to /dashboard after successful update
        console.log("Name updated successfully", success);
        redirect("/dashboard");
      } else {
        // Handle error case
        console.error("Error updating user name");
      }
    } else {
      console.error("Name not provided");
    }
  };
  return (
    <div className="flex flex-col gap-4 h-full w-full max-w-xl bg-neutral-100 rounded-lg shadow-md p-8">
      <Image
        src="/Logo_Orange_InvertedWhite.svg"
        alt="georgies house"
        width={150}
        height={30}
        className="mx-auto mb-4"
      />
      <form action={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Enter your full name"
          className="mb-2"
        />
        <Button type="submit"> Submit</Button>
      </form>
    </div>
  );
};

export default SignInPage;
