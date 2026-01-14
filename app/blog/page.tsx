import Link from "next/link";

export default function BlogIndexPage() {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 inline-flex items-center rounded-full border border-[#B8C4A0]/40 bg-white/60 px-3 py-1 text-sm">
        Blog
      </p>

      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Notes on strategy, clarity, and growth.
      </h1>

      <p className="mt-5 text-lg leading-relaxed text-[#3B3B3B]/80">
        Articles will live here soon. If you want something covered, send a
        question and I’ll write to it.
      </p>

      <div className="mt-10">
        <Link
          href="/contact"
          className="rounded-xl bg-[#F6E6A7] px-5 py-3 font-medium text-[#3B3B3B] shadow-sm hover:opacity-90"
        >
          Ask a question
        </Link>
      </div>
    </div>
  );
}
