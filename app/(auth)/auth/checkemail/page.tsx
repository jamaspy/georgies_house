import Image from "next/image";
import React from "react";

const CheckEmailsPage = () => {
  return (
    <div className="flex flex-col gap-4 h-full w-full max-w-xl bg-neutral-100 rounded-lg shadow-md p-8">
      <Image
        src="/Logo_Orange_InvertedWhite.svg"
        alt="georgies house"
        width={150}
        height={30}
        className="mx-auto mb-4"
      />
      <p className="text-xl font-semibold mb-2 text-center">
        Check Your Emails
      </p>
      <p className="text-lg mb-2">
        No one likes passwords, so we have sent you a secure link to log in.
      </p>
      <p className="font-semibold">- Georgie</p>
    </div>
  );
};

export default CheckEmailsPage;
