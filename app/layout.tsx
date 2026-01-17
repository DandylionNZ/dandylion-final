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
  alternates: {
    canonical: "https://dandylion.co.nz",
  },
  openGraph: {
    title: "Dandylion Strategy",
    description:
      "Calm, clear strategy for businesses ready to grow — clarity, direction, and measurable momentum.",
    url: "https://dandylion.co.nz",
    siteName: "Dandylion Strategy",
    locale: "en_NZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF7F2] text-[#3B3B3B]">
        {/* Header / Nav */}
        <header className="sticky top-0 z-50 border-b border-[#B8C4A0]/30 bg-[#FAF7F2]/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              Dandylion Strategy
            </Link>

            <nav className="flex items-center gap-2 text-sm">
              <Link
                href="/about"
                className="rounded-xl px-3 py-2 hover:bg-white/60"
              >
                About
              </Link>

              <Link
                href="/approach"
                className="rounded-xl px-3 py-2 hover:bg-white/60"
              >
                Approach
              </Link>

              <Link
                href="/services"
                className="rounded-xl px-3 py-2 hover:bg-white/60"
              >
                Services
              </Link>

              <Link
                href="/blog"
                className="rounded-xl px-3 py-2 hover:bg-white/60"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="ml-1 rounded-xl bg-[#F6E6A7] px-4 py-2 font-medium shadow-sm hover:opacity-90"
              >
                Book a consult
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-6xl px-6 py-14">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-[#B8C4A0]/30">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-semibold">Dandylion Strategy</div>
                <div className="mt-1 text-sm text-[#3B3B3B]/70">
                  Calm, clear strategy for sustainable growth.
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link
                  href="/about"
                  className="text-[#3B3B3B]/80 hover:text-[#3B3B3B]"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-[#3B3B3B]/80 hover:text-[#3B3B3B]"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-[#3B3B3B]/80 hover:text-[#3B3B3B]"
                >
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
