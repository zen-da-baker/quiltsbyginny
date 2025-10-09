import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import favicon from "../../public/icons/bytesized-orange.png";

const geistSans = Geist({

  variable: "--font-geist-sans",

  subsets: ["latin"],

});

const geistMono = Geist_Mono({

  variable: "--font-geist-mono",

  subsets: ["latin"],

});

export const metadata: Metadata = {

  title: "Quilts By Ginny",

  description: "Quilts by Ginny is a small business in Southern California specializing in handcrafted goods ranging from quilts to oven mitts.",

  icons: favicon.src

};

export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        { children }

      </body>

    </html>
  );
}
