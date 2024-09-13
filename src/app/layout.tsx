import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidenav from "@/components/Sidenav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tenzin's Lab",
  description: "To perform experiments with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex  h-screen w-full">
          <Sidenav/>
          <div className=" w-full">
          {children}

          </div>
        </div>
       
      </body>
    </html>
  );
}
