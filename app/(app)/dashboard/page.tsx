import React from "react";
import { auth } from "@/auth";
import { NewUserNameModel } from "@/components/new-user-name-model/new-user-name-model";

const DashboardPage = async () => {
  const session = await auth();

  if (!session) {
    return (
      <div className="w-full text-center">You must log in to see this page</div>
    );
  }
  return (
    <div className="flex-1 h-full w-full p-2 text-3xl">
      Hi
      {session?.user?.name
        ? `, ${session?.user?.name.split(" ")[0]}`
        : "there"}{" "}
      👋🏼
      <NewUserNameModel session={session} />
    </div>
  );
};

export default DashboardPage;
