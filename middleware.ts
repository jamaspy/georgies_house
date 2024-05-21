// export { auth as middleware } from "@/auth";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getServerSession } from "./actions/auth";

export async function middleware(req: NextRequest) {
  const user = await getServerSession();

  if (!user) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/signin";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
  unstable_allowDynamic: [
    // allows a single file
    "/components/email/signin.tsx",
  ],
};
