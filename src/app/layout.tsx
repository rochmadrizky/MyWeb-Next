import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navigasi/Navbar";
import FotBar from "./components/navigasi/FotBar";

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
