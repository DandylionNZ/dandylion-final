import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#8F9B85]/20 bg-[#FAF7F2]">
      <Container>
        <div className="grid gap-6 py-10 md:grid-cols-3">
          <div>
            <div className="font-semibold">Dandylion Strategy</div>
            <p className="mt-2 text-sm text-[#2F2F2C]/70">
              Calm, clear strategy for organisations navigating growth, change,
              and complexity.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Pages</div>
            <div className="mt-2 grid gap-2 text-[#2F2F2C]/70">
              <Link className="hover:text-[#2F2F2C]" href="/services">
                Services
              </Link>
              <Link className="hover:text-[#2F2F2C]" href="/approach">
                Approach
              </Link>
              <Link className="hover:text-[#2F2F2C]" href="/about">
                About
              </Link>
              <Link className="hover:text-[#2F2F2C]" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Get in touch</div>
            <div className="mt-2 grid gap-2 text-[#2F2F2C]/70">
              <a className="hover:text-[#2F2F2C]" href="mailto:hello@dandylion.co.nz">
                hello@dandylion.co.nz
              </a>
              <div className="text-xs text-[#2F2F2C]/55">
                © {new Date().getFullYear()} Dandylion Strategy
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
