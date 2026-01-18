import Image from "next/image";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Dandylion Strategy",
  description: "Clear thinking on strategy, decision-making, and communication that holds up in the real world.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      {/* HERO BANNER */}
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
          <div className="absolute inset-0 bg-[#8F9B85]/15" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#8F9B85]/35 bg-white/60 px-3 py-1 text-sm opacity-80">
            Dandylion Strategy • Writing
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Insight, without the noise.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-80">
            Notes on decision-making, strategy, and communication—written for leaders working in complexity.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-black/10 bg-white/50 p-8 opacity-80">
            No posts yet — add markdown files to <code>content/posts</code>.
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
