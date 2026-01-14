import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "1. Diagnose",
    desc: "We get clear on the real problem, the constraints, and what success looks like.",
  },
  {
    title: "2. Decide",
    desc: "We set priorities, define the sharpest moves, and cut what doesn’t matter.",
  },
  {
    title: "3. Deliver",
    desc: "You leave with a plan: actions, owners, milestones, and measures.",
  },
];

export default function ApproachPage() {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 inline-flex items-center rounded-full border border-[#B8C4A0]/40 bg-white/60 px-3 py-1 text-sm">
        Approach
      </p>

      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Clarity → direction → momentum.
      </h1>

      <p className="mt-5 text-lg leading-relaxed text-[#3B3B3B]/80">
        A simple, structured way to get from “we’re busy” to “we’re building the
        right things.”
      </p>

      <Image
        src="/images/approach.jpg"
        alt="A clear, structured approach"
        width={1200}
        height={700}
        className="my-10 h-[320px] w-full rounded-2xl object-cover"
        priority
      />

      <div className="grid gap-4">
        {steps.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-[#B8C4A0]/40 bg-white/60 p-6"
          >
            <div className="text-lg font-semibold">{s.title}</div>
            <div className="mt-2 text-sm text-[#3B3B3B]/80">{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-[#B8C4A0]/40 bg-white/60 p-6">
        <div className="text-sm font-semibold">Best fit for</div>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#3B3B3B]/80">
          <li>Founders who need a clean plan and calm execution</li>
          <li>Teams with too many ideas and not enough prioritisation</li>
          <li>Businesses ready to tighten positioning and focus growth</li>
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/services"
          className="rounded-xl bg-[#F6E6A7] px-5 py-3 font-medium text-[#3B3B3B] shadow-sm hover:opacity-90"
        >
          Choose a service
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border border-[#B8C4A0]/50 bg-white/60 px-5 py-3 font-medium text-[#3B3B3B] hover:bg-white"
        >
          Book a consult
        </Link>
      </div>
    </div>
  );
}
