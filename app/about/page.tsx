import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 inline-flex items-center rounded-full border border-[#B8C4A0]/40 bg-white/60 px-3 py-1 text-sm">
        About
      </p>

      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Strategy-first, calm by design.
      </h1>

      <p className="mt-5 text-lg leading-relaxed text-[#3B3B3B]/80">
        Dandylion Strategy helps businesses make confident decisions — the kind
        that reduce noise, sharpen priorities, and create steady momentum.
      </p>

      <Image
        src="/images/about.jpg"
        alt="Calm, grounded strategic thinking"
        width={1200}
        height={700}
        className="my-10 h-[320px] w-full rounded-2xl object-cover"
        priority
      />

      <div className="rounded-2xl border border-[#B8C4A0]/40 bg-white/60 p-6">
        <div className="text-sm font-semibold">What you can expect</div>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#3B3B3B]/80">
          <li>Clear thinking, not fluff</li>
          <li>Focused recommendations you can actually execute</li>
          <li>A practical plan tied to outcomes and capability</li>
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/services"
          className="rounded-xl bg-[#F6E6A7] px-5 py-3 font-medium text-[#3B3B3B] shadow-sm hover:opacity-90"
        >
          View services
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border border-[#B8C4A0]/50 bg-white/60 px-5 py-3 font-medium text-[#3B3B3B] hover:bg-white"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
