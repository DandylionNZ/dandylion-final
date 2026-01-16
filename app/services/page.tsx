import Link from "next/link";

export default function Services() {
  return (
    <main className="bg-[#FAF7F2] text-[#3B3B3B]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Services
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3B3B3B]/80">
          Strategic support for decisions that matter.
        </p>

        <p className="mt-6 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
          We work with organisations facing moments of complexity — where
          direction is unclear, stakes are high, or decisions need to stand up to
          scrutiny.
        </p>

        <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
          Our role is not to overwhelm you with frameworks or activity — it’s to
          bring clarity, structure, and calm thinking to strategic,
          communications, and leadership decisions.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 space-y-16">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Strategy development
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
            We help organisations define clear, focused strategy that is grounded
            in reality — not ambition alone.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
            This includes setting strategic direction, clarifying priorities,
            pressure-testing options, and translating vision into something that
            can actually be delivered.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
            The result is strategy people understand, support, and can act on.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Communications & stakeholder strategy
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
            Clear communication underpins good strategy — particularly when
            decisions affect people, reputation, or public trust.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
            We support organisations to shape communications strategies that
            align with strategic goals and help leaders navigate complexity with
            confidence.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
            This includes communications and messaging strategy, reputation and
            issues preparedness, PR and media positioning (strategic, not
            executional), alignment between strategy, brand, and communications,
            and stakeholder and audience strategy.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
            Our focus is on clarity, coherence, and judgement — ensuring what you
            say supports what you’re trying to achieve and holds up when it
            matters most.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Decision support & advisory
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
            Some decisions don’t fit neatly into a project plan.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
            We work alongside leaders to make sense of complex information, weigh
            competing priorities, assess risk and impact, and move forward with
            confidence.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
            This support is often short, focused, and highly practical.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Change & transition
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
            Change is rarely just structural — it’s human.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3B3B3B]/80">
            We help organisations navigate growth, restructure, leadership
            change, and shifting expectations in a way that is thoughtful,
            considered, and grounded in how people actually experience change.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-[#B8C4A0]/25 bg-white/60 p-8">
          <h3 className="text-xl font-semibold tracking-tight">
            Not sure where to start?
          </h3>
          <p className="mt-3 max-w-2xl text-[#3B3B3B]/80">
            Often, a short conversation is enough to clarify the challenge,
            identify options, and determine the most useful next step.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-[#F6E6A7] px-5 py-3 font-medium text-[#3B3B3B] shadow-sm hover:opacity-90"
          >
            Book a consult
          </Link>
        </div>
      </section>
    </main>
  );
}
