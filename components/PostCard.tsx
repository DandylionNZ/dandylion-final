import Link from "next/link";

type PostMeta = {
  title: string;
  excerpt: string;
  date: string;
};

type PostListItem = {
  slug: string;
  meta: PostMeta;
};

export default function PostCard({ post }: { post: PostListItem }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="text-xs uppercase tracking-wide opacity-70">
        {new Date(post.meta.date).toLocaleDateString("en-NZ", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })}
      </div>

      <h3 className="mt-2 text-xl font-semibold tracking-tight transition group-hover:opacity-90">
        {post.meta.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed opacity-80">
        {post.meta.excerpt}
      </p>

      <div className="mt-4 text-sm font-medium underline decoration-black/20">
        Read →
      </div>
    </Link>
  );
}
