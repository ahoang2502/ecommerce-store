import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import ModalProvider from "@/providers/ModalProvider";

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
