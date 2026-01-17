import Link from "next/link";
import Container from "./Container";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#8F9B85]/20 bg-[#FAF7F2]/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-[#2F2F2C]"
          >
            Dandylion Strategy
          </Link>

          <nav className="flex items-center gap-5 text-sm text-[#2F2F2C]/80">
            <Link className="hover:text-[#2F2F2C]" href="/services">
              Services
            </Link>
            <Link className="hover:text-[#2F2F2C]" href="/approach">
              Approach
            </Link>
            <Link className="hover:text-[#2F2F2C]" href="/about">
              About
            </Link>
            <Link
              className="rounded-xl bg-[#D8D4CE] px-4 py-2 font-medium text-[#2F2F2C] hover:opacity-90"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
