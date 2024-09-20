import {NextIntlClientProvider} from 'next-intl';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidenav from "@/components/Sidenav";
import {getMessages} from 'next-intl/server';
import Header from '@/components/Header';
const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
  const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });
  
  export const metadata: Metadata = {
    title: "Tenzin's Lab",
    description: "To perform experiments with Next.js and Tailwind CSS.",
  };
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <NextIntlClientProvider messages={messages}>
        <div className="flex   h-screen w-full">
          <Sidenav/>
          
          <div className=" w-full">
          <Header/>
          <div className=' mt-28'>
          {children}
          </div>
          

          </div>
        </div>
        </NextIntlClientProvider>
      </body>
      
   
    </html>
  );
}