import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Dandylion Marketing",
  description: "Strategy, brand, and comms insights from Dandylion Marketing.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
          <p className="mt-3 max-w-2xl text-lg text-[#2F2F2C]/75">
            Strategy and brand thinking you can actually use.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-[#2F2F2C]/70">No posts yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
