import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigasi/Navbar";
import FotBar from "./components/navigasi/FotBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rizky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <FotBar />
      </body>
    </html>
  );
}
