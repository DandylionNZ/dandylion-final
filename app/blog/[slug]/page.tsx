import Container from "@/components/Container";

export default function BlogPost() {
  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">

      {/* BLOG POST HERO */}
      <section className="relative border-b border-[#8F9B85]/25">
        <div className="absolute inset-0">
          <img
            src="/images/blog-post.jpg"
            alt="Dandylion Strategy article"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF7F2]/80" />
        </div>

        <Container>
          <div className="relative py-20">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Article Title Goes Here
            </h1>

            <p className="mt-4 text-sm opacity-70">
              Author • Date
            </p>
          </div>
        </Container>
      </section>

      {/* BLOG POST BODY */}
      <section className="py-20">
        <Container>
          <article className="prose max-w-none prose-headings:text-[#2F2F2C] prose-p:text-[#2F2F2C]/85">
            <p>
              This is where the article content will render from your markdown or CMS.
            </p>
          </article>
        </Container>
      </section>

    </main>
  );
}
