import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Header from "../components/header";
import { Noto_Serif_Ahom, AR_One_Sans } from "next/font/google";

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

const NotoAhom = Noto_Serif_Ahom({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-ahom",
});
const AROneSans = AR_One_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-ArOneSans",
});

export const metadata: Metadata = {
  title: "Heros of Israel",
  description: "Honoring those who have helped Israel thrive and survive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${NotoAhom.variable} ${AROneSans.variable}antialiased flex flex-col`}
      >
        <Header className="" />
        <main className="h-[5000px]">{children}</main>
        <footer className="bg-black text-white">Footer</footer>
      </body>
    </html>
  );
}
