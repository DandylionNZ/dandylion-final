import Link from "next/link";
import { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-2xl border border-black/5 bg-white/50 p-6 shadow-sm hover:shadow-md transition"
    >
      <div className="text-xs uppercase tracking-wide opacity-70">{post.category ?? "Insight"}</div>
      <h3 className="mt-2 text-xl font-semibold tracking-tight group-hover:opacity-90 transition">
        {post.title}
      </h3>
      <p className="mt-2 text-sm opacity-80">{post.description}</p>
      <div className="mt-4 text-sm font-medium underline decoration-black/20">
        Read →
      </div>
    </Link>
  );
}
