import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#8F9B85]/25">
        <div className="absolute inset-0">
          <Image
            src="/images/people.jpg"
            alt="Contact"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF7F2]/78" />
          <div className="absolute inset-0 bg-[#8F9B85]/12" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#8F9B85]/35 bg-white/60 px-3 py-1 text-sm text-[#2F2F2C]/80">
            Contact
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            A conversation is often the best place to start.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2F2F2C]/80">
            If you’re navigating a decision, period of change, or moment where
            clarity would help, get in touch. There’s no expectation to arrive
            with a perfect brief.
          </p>
        </div>
      </section>

      {/* CONTACT CARD */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Email</h2>
            <p className="mt-2 text-[#2F2F2C]/80">
              The simplest way to start is an email with a sentence or two about
              what you’re navigating.
            </p>
            <a
              className="mt-5 inline-flex rounded-xl bg-[#D8D4CE] px-5 py-3 font-medium text-[#2F2F2C] shadow-sm hover:opacity-90"
              href="mailto:hello@dandylion.co.nz"
            >
              hello@dandylion.co.nz
            </a>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight">Book a call</h2>
            <p className="mt-2 text-[#2F2F2C]/80">
              If you prefer, book a short introductory conversation and we’ll
              work out the most useful next step.
            </p>
            <a
              className="mt-5 inline-flex rounded-xl border border-[#8F9B85]/45 bg-white/60 px-5 py-3 font-medium text-[#2F2F2C] hover:bg-white"
              href="#"
            >
              Book a consult (add link later)
            </a>
            <p className="mt-4 text-xs text-[#2F2F2C]/60">
              We work with organisations across New Zealand and internationally.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
