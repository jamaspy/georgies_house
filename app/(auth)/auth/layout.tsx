import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../../globals.css";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Georgie's House | Sign In",
  description: "Youth mental health and wellbeing support",
  metadataBase: new URL("https://www.georgieshouse.org.au"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space.className}>
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-george-orange to-orange-600 relative">
          {children}
        </main>
      </body>
    </html>
  );
}
