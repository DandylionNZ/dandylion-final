import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FAF7F2] text-[#3B3B3B]">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden border-b border-[#B8C4A0]/25">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Calm, clear strategy for growing businesses"
            fill
            priority
            className="object-cover"
          />
          {/* Soft overlays */}
          <div className="absolute inset-0 bg-[#FAF7F2]/65" />
          <div className="absolute inset-0 bg-[#B8C4A0]/15" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-24">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#B8C4A0]/35 bg-white/60 px-3 py-1 text-sm text-[#3B3B3B]/80">
            Dandylion Strategy • New Zealand
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Calm, clear strategy for businesses ready to grow.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3B3B3B]/80">
            Strategy-first guidance for businesses that want clarity, momentum,
            and measurable growth — without the chaos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#F6E6A7] px-5 py-3 font-medium text-[#3B3B3B] shadow-sm hover:opacity-90"
            >
              Book a consult
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-[#B8C4A0]/45 bg-white/60 px-5 py-3 font-medium text-[#3B3B3B] hover:bg-white"
            >
              View services
            </Link>
          </div>

          {/* Value cards */}
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {[
              ["Clarity", "A sharp view of what matters most."],
              ["Direction", "A focused plan you can execute."],
              ["Confidence", "Decisions backed by evidence."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#B8C4A0]/35 bg-white/60 p-5 shadow-sm"
              >
                <div className="text-base font-semibold">{title}</div>
                <div className="mt-1 text-sm text-[#3B3B3B]/75">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE / WORKING SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl border border-[#B8C4A0]/35 bg-white/40 shadow-sm">
            <img
              src="/images/people.jpg"
              alt="Strategic work in progress"
              className="h-[360px] w-full object-cover"
            />
            {/* Very subtle sage alignment */}
            <div className="pointer-events-none absolute inset-0 bg-[#B8C4A0]/10" />
          </div>

          {/* Copy */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Thoughtful work, done alongside you
            </h2>
            <p className="mt-4 text-[#3B3B3B]/80 leading-relaxed">
              Strategy doesn’t live in documents alone. It takes shape through
              thoughtful conversation, careful analysis, and practical decisions
              — always grounded in your real-world context.
            </p>
            <p className="mt-4 text-[#3B3B3B]/80 leading-relaxed">
              The goal is simple: clarity you can act on, and confidence in the
              direction you’re taking.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT STEP CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 rounded-2xl border border-[#B8C4A0]/25 bg-white/60 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              Not sure where to start?
            </h3>
            <p className="mt-2 text-[#3B3B3B]/80">
              A short consult is often enough to identify the sharpest next move.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-xl bg-[#F6E6A7] px-5 py-3 font-medium text-[#3B3B3B] shadow-sm hover:opacity-90"
          >
            Book a consult
          </Link>
        </div>
      </section>
    </main>
  );
}
