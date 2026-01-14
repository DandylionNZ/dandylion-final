import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Strategy Intensive",
    who: "For founders/leaders who need clarity fast.",
    bullets: [
      "90–120 min working session",
      "Problem framing + priorities",
      "Clear next steps you can execute",
    ],
  },
  {
    title: "Positioning & Messaging",
    who: "For businesses that need a sharper story.",
    bullets: [
      "Ideal customer + differentiation",
      "Offer structure and messaging pillars",
      "Website + content direction",
    ],
  },
  {
    title: "Growth Plan",
    who: "For teams ready to move from ideas to outcomes.",
    bullets: [
      "Goals, metrics, and roadmap",
      "Channel strategy (what to do / not do)",
      "Quarterly plan with milestones",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-4xl">
      <p className="mb-4 inline-flex items-center rounded-full border border-[#B8C4A0]/35 bg-white/60 px-3 py-1 text-sm text-[#3B3B3B]/80">
        Services
      </p>

      <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
        Strategic services that bring clarity and momentum.
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#3B3B3B]/80">
        Minimal, clear, warm, authoritative — built around what will create the
        biggest lift for your business.
      </p>

      <div className="relative mt-10 overflow-hidden rounded-2xl border border-[#B8C4A0]/35 bg-white/40 shadow-sm">
        <Image
          src="/images/services.jpg"
          alt="Strategic planning and clarity"
          width={1200}
          height={700}
          className="h-[320px] w-full object-cover"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#B8C4A0]/10" />
      </div>

      {/* How to choose */}
      <div className="mt-10 grid gap-4 rounded-2xl border border-[#B8C4A0]/25 bg-white/60 p-6 md:grid-cols-3">
        {[
          ["You feel stuck", "Start with Strategy Intensive."],
          ["Your story is fuzzy", "Choose Positioning & Messaging."],
          ["You need a plan", "Go with the Growth Plan."],
        ].map(([t, d]) => (
          <div key={t}>
            <div className="text-sm font-semibold">{t}</div>
            <div className="mt-1 text-sm text-[#3B3B3B]/70">{d}</div>
          </div>
        ))}
      </div>

      {/* Service cards */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-[#B8C4A0]/35 bg-white/60 p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/70"
          >
            <div className="text-lg font-semibold">{s.title}</div>
            <div className="mt-1 text-sm text-[#3B3B3B]/70">{s.who}</div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#3B3B3B]/80">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-wrap items-center gap-3">
        <Link
          href="/contact"
          className="rounded-xl bg-[#F6E6A7] px-5 py-3 font-medium text-[#3B3B3B] shadow-sm hover:opacity-90"
        >
          Book a consult
        </Link>
        <Link
          href="/approach"
          className="rounded-xl border border-[#B8C4A0]/45 bg-white/60 px-5 py-3 font-medium text-[#3B3B3B] hover:bg-white"
        >
          See the approach
        </Link>
      </div>
    </div>
  );
}
