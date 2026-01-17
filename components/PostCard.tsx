import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

type Post = {
  slug: string;
  meta: PostMeta;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-black/5 bg-white/50 p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="text-xs uppercase tracking-wide opacity-70">
        {post.meta.category ?? "Insight"}
      </div>

      <h3 className="mt-2 text-xl font-semibold tracking-tight transition group-hover:opacity-90">
        {post.meta.title}
      </h3>

      {post.meta.description ? (
        <p className="mt-2 text-sm opacity-80">{post.meta.description}</p>
      ) : null}

      <div className="mt-4 text-sm font-medium underline decoration-black/20">
        Read →
      </div>
    </Link>
  );
}
