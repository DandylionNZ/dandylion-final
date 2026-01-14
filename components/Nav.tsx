import Link from "next/link";
import Container from "./container";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:var(--cream)]/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-medium tracking-tight">
            Dandylion <span className="opacity-70">Strategy</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <Link href="/services">Services</Link>
            <Link href="/approach">Approach</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Insights</Link>
            <Link
              href="/contact"
              className="rounded-full bg-[color:var(--butter)] px-4 py-2 font-medium"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
