import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const space = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Georgie's House",
  description: 'Youth mental health and wellbeing support',
  metadataBase: new URL('https://www.georgieshouse.org.au'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space.className}>
        <main className="flex flex-col justify-between min-h-screen bg-neutral-50 relative">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
