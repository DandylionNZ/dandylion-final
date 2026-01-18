import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { meta } = await getPostBySlug(params.slug);
    return {
      title: `${meta.title} | Dandylion Strategy`,
      description: meta.excerpt ?? undefined,
    };
  } catch {
    return { title: "Post not found | Dandylion Strategy" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post;
  try {
    post = await getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const { meta, contentHtml } = post;

  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      {/* BANNER */}
      <section className="relative overflow-hidden border-b border-[#8F9B85]/25">
        <div className="absolute inset-0">
          <Image
            src={meta.coverImage ?? "/images/blog-post.jpg"}
            alt={meta.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF7F2]/72" />
          <div className="absolute inset-0 bg-[#8F9B85]/10" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 py-14 sm:py-16">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#8F9B85]/35 bg-white/60 px-3 py-1 text-sm text-[#2F2F2C]/80">
            {meta.category ?? "Insight"} • {meta.date}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {meta.title}
          </h1>

          {meta.excerpt ? (
            <p className="mt-5 text-lg leading-relaxed text-[#2F2F2C]/75">
              {meta.excerpt}
            </p>
          ) : null}
        </div>
      </section>

      {/* CONTENT */}
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div
          className="prose prose-lg max-w-none prose-headings:tracking-tight prose-a:underline prose-a:decoration-black/20 prose-a:underline-offset-4"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}
