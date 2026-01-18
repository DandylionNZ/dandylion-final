import Image from "next/image";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts(); // should be [{ slug, meta }]

  return (
    <main className="bg-[#FAF7F2] text-[#3B3B3B]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0">
          <Image
            src="/images/blog-hero.jpg"
            alt="Blog"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF7F2]/70" />
          <div className="absolute inset-0 bg-[#8F9B85]/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="mb-4 inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-sm text-[#3B3B3B]/80">
            Dandylion Strategy • Insights
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Notes on strategy that holds up in the real world.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3B3B3B]/80">
            Practical thinking on decision quality, clarity in complexity, and the
            role communication plays when it matters most.
          </p>
        </div>
      </section>

      {/* LIST */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-black/10 bg-white/50 p-8">
            <h2 className="text-xl font-semibold">No posts yet</h2>
            <p className="mt-2 opacity-80">
              Add Markdown posts in <code>content/posts</code>.
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
