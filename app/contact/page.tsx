export default function ContactPage() {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 inline-flex items-center rounded-full border border-[#B8C4A0]/40 bg-white/60 px-3 py-1 text-sm">
        Contact
      </p>

      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Let’s build a clear plan.
      </h1>

      <p className="mt-5 text-lg leading-relaxed text-[#3B3B3B]/80">
        Share a little about your business and what you want to achieve. I’ll
        come back with next steps and the best-fit way to work together.
      </p>

      <div className="mt-10 rounded-2xl border border-[#B8C4A0]/40 bg-white/60 p-6">
        <div className="text-sm font-semibold">Email</div>
        <div className="mt-1 text-sm text-[#3B3B3B]/80">
          Add your email here (example: hello@dandylion.co.nz)
        </div>

        <div className="mt-6 text-sm font-semibold">Prefer a quick start?</div>
        <div className="mt-2 text-sm text-[#3B3B3B]/80">
          Reply with:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Your business + website</li>
            <li>What’s working / what isn’t</li>
            <li>Your goal for the next 90 days</li>
          </ul>
        </div>

        <div className="mt-6 text-xs text-[#3B3B3B]/60">
          (We can add a proper contact form next — this page is the reliable base.)
        </div>
      </div>
    </div>
  );
}
