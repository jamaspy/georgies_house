import React from "react";
import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();

  if (!session) {
    return <div>You must log in to see this page</div>;
  }
  return <div>Dashboard Page: {session?.user?.name}</div>;
};

export default DashboardPage;
