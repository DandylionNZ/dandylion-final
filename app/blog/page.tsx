import Image from "next/image";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      {/* BANNER */}
      <section className="relative overflow-hidden border-b border-[#8F9B85]/25">
        <div className="absolute inset-0">
          <Image
            src="/images/blog-hero.jpg"
            alt="Dandylion Strategy blog"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF7F2]/72" />
          <div className="absolute inset-0 bg-[#8F9B85]/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#8F9B85]/35 bg-white/60 px-3 py-1 text-sm text-[#2F2F2C]/80">
            Dandylion Strategy • Blog
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Calm, clear strategy — in writing
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#2F2F2C]/75">
            Practical thinking on decision quality, direction, communications as
            strategy, and work that holds up under real-world pressure.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-8">
            <p className="text-[#2F2F2C]/80">
              No posts found yet. Add Markdown files to{" "}
              <code className="rounded bg-black/5 px-2 py-1">
                content/posts
              </code>
              .
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
