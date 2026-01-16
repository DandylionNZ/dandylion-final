import Link from "next/link";

export default function Contact() {
  return (
    <main className="bg-[#FAF7F2] text-[#3B3B3B]">
      <section className="mx-auto max-w-6xl px-6 py-20 space-y-10">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Contact
        </h1>

        <h2 className="text-2xl font-semibold tracking-tight">
          A conversation is often the best place to start
        </h2>

        <p className="max-w-3xl leading-relaxed text-[#3B3B3B]/80">
          If you’re navigating a decision, period of change, or moment where
          clarity would help, a short conversation can often make the path
          forward clearer.
        </p>

        <p className="max-w-3xl leading-relaxed text-[#3B3B3B]/80">
          There’s no expectation to arrive with a fully formed brief. We’re
          happy to listen, ask thoughtful questions, and help you work out
          whether our support would be useful.
        </p>

        <h3 className="text-xl font-semibold">How to get in touch</h3>

        <p className="max-w-3xl leading-relaxed text-[#3B3B3B]/80">
          You can reach us by email, or book a short introductory conversation
          at a time that suits.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="mailto:hello@dandylion.co.nz"
            className="rounded-xl border border-[#B8C4A0]/45 bg-white/60 px-5 py-3 font-medium text-[#3B3B3B] hover:bg-white"
          >
            Email us
          </a>

          <Link
            href="#"
            className="rounded-xl bg-[#F6E6A7] px-5 py-3 font-medium text-[#3B3B3B] shadow-sm hover:opacity-90"
          >
            Book a consult
          </Link>
        </div>

        <p className="max-w-3xl pt-6 text-sm text-[#3B3B3B]/60">
          We work with organisations across New Zealand and internationally.
        </p>
      </section>
    </main>
  );
}
