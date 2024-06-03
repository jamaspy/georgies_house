import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { XataAdapter } from "@auth/xata-adapter";
import { client } from "@/database/client";
import type { Adapter } from "next-auth/adapters";
import { resend } from "./utils/resend";
import SignInEmail from "./components/email/signin";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: XataAdapter(client) as Adapter,
  providers: [
    Google,
    Resend({
      from: "info@georgieshouse.org.au",

      sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        const emailVerificationLink = new URL(url);
        emailVerificationLink.searchParams.set(
          "callbackUrl",
          `${baseUrl}/dashboard`
        );
        const newLink = emailVerificationLink.href;
        resend.emails.send({
          from: from,
          to: [email],
          subject: "This is your secure link to sign in to Georgies House",
          react: SignInEmail({
            url: newLink,
          }),
        });
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/checkemail",
    newUser: "/auth/newuser",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative URLs to be used
      if (url.startsWith("/")) {
        return `${baseUrl}/dashboard`;
      }
      // Allows external URLs
      else if (new URL(url).origin === baseUrl) {
        return `${baseUrl}/dashboard`;
      }
      return baseUrl;
    },
  },
});
