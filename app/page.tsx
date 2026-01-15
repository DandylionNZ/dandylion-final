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
Strategy, without the noise.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3B3B3B]/80">
         Strategy and guidance for organisations navigating growth, change, and complexity.
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
          Dandylion Strategy helps organisations make clear, confident decisions when complexity, change, or scrutiny make direction hard to see.
            </p>
            <p className="mt-4 text-[#3B3B3B]/80 leading-relaxed">
             We support leaders through moments that matter — shaping strategy, clarifying direction, and aligning teams so decisions can actually be acted on.
 </p>
            <p className="mt-4 text-[#3B3B3B]/80 leading-relaxed">
Our work sits at the intersection of strategy, communications, and delivery. We help you define what matters most, make sense of competing priorities, and move forward with confidence — whether you’re navigating change, growth, or increased scrutiny.
 </p>
            <p className="mt-4 text-[#3B3B3B]/80 leading-relaxed">
We work in a grounded, considered way. No noise, no unnecessary frameworks — just clear thinking, thoughtful advice, and practical support that helps strategy hold up in the real world.
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
