import Container from "@/components/Container";

export default function BlogPage() {
  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">

      {/* BLOG HERO */}
      <section className="relative border-b border-[#8F9B85]/25">
        <div className="absolute inset-0">
          <img
            src="/images/blog-hero.jpg"
            alt="Strategic insights for business leaders"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF7F2]/75" />
        </div>

        <Container>
          <div className="relative py-20">
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Strategic thinking for organisations navigating change.
            </h1>

            <p className="mt-6 max-w-2xl text-lg opacity-80">
              Perspectives on leadership, decision-making, communication strategy,
              and the realities of growing a business in Aotearoa.
            </p>
          </div>
        </Container>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">

            {/* Example cards — your CMS will replace these */}
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Sample Article {i}</h3>
                <p className="mt-2 text-sm opacity-70">
                  This is where your article description will show.
                </p>
              </div>
            ))}

          </div>
        </Container>
      </section>

    </main>
  );
}
