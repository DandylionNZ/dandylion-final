import Link from "next/link";
import type { PostListItem } from "@/lib/posts";

export default function PostCard({ post }: { post: PostListItem }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-[#8F9B85]/25 bg-white/60 p-6 shadow-sm transition hover:bg-white"
    >
      <p className="text-sm text-[#2F2F2C]/70">
        {post.meta.category ?? "Insight"} • {post.meta.date}
      </p>

      <h3 className="mt-2 text-xl font-semibold tracking-tight">
        {post.meta.title}
      </h3>

      {post.meta.excerpt ? (
        <p className="mt-3 text-sm leading-relaxed text-[#2F2F2C]/75">
          {post.meta.excerpt}
        </p>
      ) : null}

      <div className="mt-4 text-sm font-medium underline decoration-black/20 underline-offset-4 group-hover:decoration-black/40">
        Read →
      </div>
    </Link>
  );
}
