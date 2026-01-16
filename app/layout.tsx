import "./globals.css";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";

export const metadata = {
  title: {
    default: "Dandylion Strategy",
    template: "%s • Dandylion Strategy",
  },
  description:
    "Calm, clear strategy for businesses ready to grow — clarity, direction, and measurable momentum.",
  metadataBase: new URL("https://dandylion.co.nz"),
};

const brandSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-brand",
  display: "swap",
});

const displaySans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${brandSerif.variable} ${displaySans.variable}`}>
      <body className="font-display antialiased">
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-[#B8C4A0]/25 bg-[#FAF7F2]/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-brand text-xl tracking-tight">
              Dandylion Strategy
            </Link>

            <nav className="flex items-center gap-1 text-sm font-display">
              {[
                ["About", "/about"],
                ["Approach", "/approach"],
                ["Services", "/services"],
                ["Blog", "/blog"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl px-3 py-2 text-[#3B3B3B]/80 hover:bg-white/60 hover:text-[#3B3B3B]"
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="ml-2 rounded-xl bg-[#F6E6A7] px-4 py-2 font-medium text-[#3B3B3B] shadow-sm hover:opacity-90"
              >
                Bo
