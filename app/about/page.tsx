import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#8F9B85]/25">
        <div className="absolute inset-0">
          <Image
            src="/images/about.jpg"
            alt="About Dandylion Strategy"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF7F2]/72" />
          <div className="absolute inset-0 bg-[#8F9B85]/12" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#8F9B85]/35 bg-white/60 px-3 py-1 text-sm text-[#2F2F2C]/80">
            About
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Clear thinking, grounded advice.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2F2F2C]/80">
            Dandylion Strategy supports organisations when decisions matter —
            especially when complexity, change, or scrutiny makes direction hard
            to see.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-xl bg-[#D8D4CE] px-5 py-3 font-medium text-[#2F2F2C] shadow-sm hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-10">
        <div className="rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight">
            An independent perspective
          </h2>
          <p className="mt-3 leading-relaxed text-[#2F2F2C]/80">
            We provide an independent, considered perspective — helping leaders
            step back, see situations clearly, and move forward with confidence.
            Our role is not to replace internal expertise, but to support it.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-7 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight">
              Strategy and communications strategy
            </h3>
            <p className="mt-3 leading-relaxed text-[#2F2F2C]/80">
              The work sits at the intersection of strategy, communications
              strategy, and leadership decision-making — particularly valuable
              during change, growth, or public attention.
            </p>
          </div>

          <div className="rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-7 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight">
              How we show up
            </h3>
            <p className="mt-3 leading-relaxed text-[#2F2F2C]/80">
              Grounded, collaborative, and practical. Thoughtful rather than
              performative. Focused on what matters most — without adding noise.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-7 shadow-sm">
          <h3 className="text-lg font-semibold tracking-tight">Who this is for</h3>
          <p className="mt-3 leading-relaxed text-[#2F2F2C]/80">
            Dandylion Strategy works best with organisations that value clarity,
            sound judgement, and thoughtful decision-making — and want support
            that reflects that.
          </p>
        </div>
      </section>
    </main>
  );
}
