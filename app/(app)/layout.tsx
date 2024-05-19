import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import AppNavbar from "@/components/Navbar/AppNavbar/AppNavbar";
import MobileAppNavbar from "@/components/Navbar/AppNavbar/MobileAppNavbar";
import { auth } from "@/auth";
const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Georgie's House | Sign In",
  description: "Youth mental health and wellbeing support",
  metadataBase: new URL("https://www.georgieshouse.org.au"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={cn(
          space.className,
          "min-h-screen bg-gradient-to-br from-george-orange to-orange-600 p-4 flex flex-col items-center justify-center"
        )}
      >
        <main className="flex flex-col items-center justify-between min-h-[96vh] bg-neutral-200 relative rounded-lg w-full overflow-hidden">
          <AppNavbar />
          {children}
        </main>
      </body>
    </html>
  );
}
