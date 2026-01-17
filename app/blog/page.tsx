import Image from "next/image";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Dandylion Strategy",
  description: "Clear thinking on strategy, communications, and decision-making.",
};

export default function BlogPage() {
  const posts = getAllPosts(); // should read content/posts/*.md

  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      {/* Banner */}
      <section className="relative overflow-hidden border-b border-[#8F9B85]/25">
        <div className="absolute inset-0">
          <Image
            src="/images/blog-hero.jpg"
            alt="Dandylion Strategy blog"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF7F2]/70" />
          <div className="absolute inset-0 bg-[#8F9B85]/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#8F9B85]/35 bg-white/60 px-3 py-1 text-sm text-[#2F2F2C]/80">
            Dandylion Strategy • Insights
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Notes on strategy, comms, and confident decisions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2F2F2C]/80">
            Practical thinking for leaders navigating growth, change, and complexity.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-black/5 bg-white/50 p-8">
            <h2 className="text-xl font-semibold">No posts yet</h2>
            <p className="mt-2 text-sm opacity-80">
              Add markdown files to <code className="font-mono">content/posts</code>.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <PostCard
                key={p.slug}
                post={{
                  slug: p.slug,
                  meta: p.meta,
                }}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
