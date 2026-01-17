import Image from "next/image";
import Link from "next/link";

export default function ApproachPage() {
  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#8F9B85]/25">
        <div className="absolute inset-0">
          <Image
            src="/images/approach.jpg"
            alt="A calm, considered approach to strategy"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF7F2]/70" />
          <div className="absolute inset-0 bg-[#8F9B85]/12" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#8F9B85]/35 bg-white/60 px-3 py-1 text-sm text-[#2F2F2C]/80">
            Approach
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Calm thinking for complex moments.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2F2F2C]/80">
            Good strategy isn’t loud. It’s clear. We bring structure, judgement,
            and grounded advice — especially when the stakes are high.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-xl bg-[#D8D4CE] px-5 py-3 font-medium text-[#2F2F2C] shadow-sm hover:opacity-90"
            >
              View services
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-[#8F9B85]/45 bg-white/60 px-5 py-3 font-medium text-[#2F2F2C] hover:bg-white"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Clarity first",
              "We slow down long enough to see what’s actually happening — and what decision really needs to be made.",
            ],
            [
              "Alongside leaders",
              "Collaborative, close to the work, respectful of internal expertise — with independent thinking when needed.",
            ],
            [
              "Judgement over templates",
              "No generic frameworks for the sake of it. We tailor thinking to your context and constraints.",
            ],
            [
              "Decisions, not documents",
              "The goal isn’t a report — it’s a decision that can be explained, defended, and delivered.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-[#8F9B85]/30 bg-white/60 p-5 shadow-sm"
            >
              <div className="text-base font-semibold">{title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[#2F2F2C]/75">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE + COPY */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-[#8F9B85]/30 bg-white/40 shadow-sm">
            <Image
              src="/images/people.jpg"
              alt="Strategic collaboration"
              width={1400}
              height={900}
              className="h-[380px] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#8F9B85]/10" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Strategy that holds up in the real world.
            </h2>

            <p className="mt-4 leading-relaxed text-[#2F2F2C]/80">
              We’re often brought in during moments of change, scrutiny, or
              uncertainty — when there’s pressure to move fast, but the cost of
              getting it wrong is high.
            </p>

            <p className="mt-4 leading-relaxed text-[#2F2F2C]/80">
              Our work sits at the intersection of strategy and communications
              strategy — helping you make confident choices, align people around
              direction, and communicate decisions with credibility.
            </p>

            <p className="mt-4 leading-relaxed text-[#2F2F2C]/80">
              You’ll get clear thinking, thoughtful advice, and practical
              support — without the noise.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              Want a clear next step?
            </h3>
            <p className="mt-2 text-[#2F2F2C]/80">
              A short call is often enough to pinpoint the decision and the
              sharpest move from here.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-xl bg-[#D8D4CE] px-5 py-3 font-medium text-[#2F2F2C] shadow-sm hover:opacity-90"
          >
            Book a call
          </Link>
        </div>
      </section>
    </main>
  );
}
