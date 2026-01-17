import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Dandylion Strategy",
  description:
    "Practical strategy thinking for leaders navigating growth, change, and complexity.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      <section className="border-b border-[#8F9B85]/25">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#8F9B85]/35 bg-white/60 px-3 py-1 text-sm text-[#2F2F2C]/80">
            Blog
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Notes on strategy that holds up.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2F2F2C]/80">
            Clear thinking for leaders making decisions in complex environments —
            written in plain language, grounded in real work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-8 text-[#2F2F2C]/80">
            No posts yet.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-7 shadow-sm"
              >
                <div className="text-xs uppercase tracking-wide text-[#2F2F2C]/60">
                  {post.date}
                </div>

                <h2 className="mt-2 text-xl font-semibold tracking-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>

                {post.excerpt ? (
                  <p className="mt-3 text-sm leading-relaxed text-[#2F2F2C]/75">
                    {post.excerpt}
                  </p>
                ) : null}

                <div className="mt-5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex rounded-xl border border-[#8F9B85]/35 bg-white/40 px-4 py-2 text-sm font-medium text-[#2F2F2C] hover:bg-white"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
