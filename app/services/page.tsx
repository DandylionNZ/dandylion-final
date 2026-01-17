import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#8F9B85]/25">
        <div className="absolute inset-0">
          <Image
            src="/images/services.jpg"
            alt="Services"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF7F2]/70" />
          <div className="absolute inset-0 bg-[#8F9B85]/12" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#8F9B85]/35 bg-white/60 px-3 py-1 text-sm text-[#2F2F2C]/80">
            Services
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Strategic support for decisions that matter.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2F2F2C]/80">
            Clear thinking, practical guidance, and calm structure — especially
            when complexity, change, or scrutiny makes direction hard to see.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#D8D4CE] px-5 py-3 font-medium text-[#2F2F2C] shadow-sm hover:opacity-90"
            >
              Book a consult
            </Link>
            <Link
              href="/approach"
              className="rounded-xl border border-[#8F9B85]/45 bg-white/60 px-5 py-3 font-medium text-[#2F2F2C] hover:bg-white"
            >
              How we work
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-10">
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            {
              title: "Strategy development",
              body: `We help organisations clarify strategic direction, define priorities, and pressure-test options — then translate strategy into something that can be delivered.`,
            },
            {
              title: "Decision support & advisory",
              body: `For decisions that don’t fit neatly into a project plan. We help leaders make sense of complex information, weigh trade-offs, assess risk, and move forward with confidence.`,
            },
            {
              title: "Communications & stakeholder strategy",
              body: `Clear communication underpins good strategy — particularly when decisions affect people, reputation, or public trust. We shape communications strategy that aligns with direction and supports credibility (including messaging strategy, issues preparedness, media positioning as strategy, and stakeholder/audience strategy).`,
            },
            {
              title: "Change & transition",
              body: `Change is rarely just structural — it’s human. We help organisations navigate growth, restructure, leadership change, and shifting expectations in a way that is thoughtful and grounded.`,
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-[#8F9B85]/30 bg-white/60 p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold tracking-tight">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-[#2F2F2C]/80">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              Not sure what you need yet?
            </h3>
            <p className="mt-2 text-[#2F2F2C]/80">
              A short conversation is often enough to clarify the decision, the
              options, and the sharpest next step.
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
