import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      <section className="border-b border-[#8F9B85]/25">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16">
          <Link
            href="/blog"
            className="text-sm text-[#2F2F2C]/70 hover:text-[#2F2F2C]"
          >
            ← Back to Blog
          </Link>

          <div className="mt-6 text-xs uppercase tracking-wide text-[#2F2F2C]/60">
            {post.date}
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            {post.title}
          </h1>

          {post.excerpt ? (
            <p className="mt-5 text-lg leading-relaxed text-[#2F2F2C]/80">
              {post.excerpt}
            </p>
          ) : null}
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-14">
        <div
          className="prose prose-neutral max-w-none prose-headings:tracking-tight prose-a:text-[#2F2F2C] prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
