import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: {
    default: "Dandylion Strategy",
    template: "%s • Dandylion Strategy",
  },
  description:
    "Calm, clear strategy for businesses ready to grow — clarity, direction, and measurable momentum.",
  metadataBase: new URL("https://dandylion.co.nz"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF7F2] text-[#3B3B3B] antialiased">
        <header className="sticky top-0 z-50 border-b border-[#B8C4A0]/25 bg-[#FAF7F2]/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              Dandylion Strategy
            </Link>

            <nav className="flex items-center gap-1 text-sm">
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
                Book a consult
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-12 sm:py-14 md:py-16">
          {children}
        </main>

        <footer className="border-t border-[#B8C4A0]/25">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-semibold">Dandylion Strategy</div>
                <div className="mt-1 text-sm text-[#3B3B3B]/70">
                  Calm, clear strategy for sustainable growth.
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link className="text-[#3B3B3B]/75 hover:text-[#3B3B3B]" href="/about">
                  About
                </Link>
                <Link className="text-[#3B3B3B]/75 hover:text-[#3B3B3B]" href="/services">
                  Services
                </Link>
                <Link className="text-[#3B3B3B]/75 hover:text-[#3B3B3B]" href="/contact">
                  Contact
                </Link>
              </div>
            </div>

            <div className="mt-8 text-xs text-[#3B3B3B]/60">
              © {new Date().getFullYear()} Dandylion Strategy. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
