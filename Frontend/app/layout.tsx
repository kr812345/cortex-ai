import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const dmMono = DM_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-dm-mono" });

export const metadata: Metadata = {
  title: "CortexAi | The Enterprise Intelligence Layer",
  description: "Unify your company's knowledge and automate workflows with CortexAi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${bricolage.variable} ${dmMono.variable} font-sans antialiased selection:bg-[#ff5500] selection:text-white`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
