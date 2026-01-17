import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dandylion Strategy",
  description:
    "Strategy-first guidance for organisations navigating growth, change, and complexity — without the noise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FAF7F2] text-[#2F2F2C] antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
