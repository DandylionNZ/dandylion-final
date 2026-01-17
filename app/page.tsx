import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#8F9B85]/25">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Calm, clear strategy for growing organisations"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF7F2]/68" />
          <div className="absolute inset-0 bg-[#8F9B85]/12" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-24">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#8F9B85]/35 bg-white/60 px-3 py-1 text-sm text-[#2F2F2C]/80">
            Dandylion Strategy • New Zealand
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Strategy, without the noise.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2F2F2C]/80">
            Strategy and guidance for organisations navigating growth, change,
            and complexity — with clarity, calm thinking, and sound judgement.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#D8D4CE] px-5 py-3 font-medium text-[#2F2F2C] shadow-sm hover:opacity-90"
            >
              Book a consult
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-[#8F9B85]/45 bg-white/60 px-5 py-3 font-medium text-[#2F2F2C] hover:bg-white"
            >
              View services
            </Link>
          </div>

          {/* VALUE CARDS */}
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {[
              ["Clarity", "A sharp view of what matters most."],
              ["Direction", "A focused plan you can execute."],
              ["Confidence", "Decisions backed by evidence and judgement."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#8F9B85]/30 bg-white/60 p-5 shadow-sm"
              >
                <div className="text-base font-semibold">{title}</div>
                <div className="mt-1 text-sm text-[#2F2F2C]/75">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE / WORKING */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-[#8F9B85]/30 bg-white/40 shadow-sm">
            <Image
              src="/images/people.jpg"
              alt="Strategic work in progress"
              width={1400}
              height={900}
              className="h-[380px] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#8F9B85]/10" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Thoughtful work, done alongside you
            </h2>

            <p className="mt-4 leading-relaxed text-[#2F2F2C]/80">
              Dandylion Strategy helps organisations make clear, confident
              decisions when complexity, change, or scrutiny makes direction
              hard to see.
            </p>

            <p className="mt-4 leading-relaxed text-[#2F2F2C]/80">
              We support leaders through moments that matter — shaping strategy,
              clarifying direction, and aligning teams so decisions can actually
              be acted on.
            </p>

            <p className="mt-4 leading-relaxed text-[#2F2F2C]/80">
              Our work sits at the intersection of strategy, communications
              strategy, and delivery thinking — helping you define what matters,
              make sense of competing priorities, and move forward with
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              Not sure where to start?
            </h3>
            <p className="mt-2 text-[#2F2F2C]/80">
              A short consult is often enough to identify the sharpest next move.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-xl bg-[#D8D4CE] px-5 py-3 font-medium text-[#2F2F2C] shadow-sm hover:opacity-90"
          >
            Book a consult
          </Link>
        </div>
      </section>
    </main>
  );
}
