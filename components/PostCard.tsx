import Link from "next/link";
import type { PostListItem } from "@/lib/posts";

export default function PostCard({ post }: { post: PostListItem }) {
  const { slug, meta } = post;

  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">

      {/* Banner image thumbnail */}
      {meta.coverImage ? (
        <img
          src={meta.coverImage}
          alt={meta.title}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      ) : null}

      <div className="flex flex-col gap-2 p-6">

        {/* Category */}
        {meta.category ? (
          <span className="inline-block rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black/60">
            {meta.category}
          </span>
        ) : null}

        {/* Date */}
        {meta.date ? <p className="text-sm text-black/60">{meta.date}</p> : null}

        {/* Title */}
        <h2 className="text-xl font-semibold tracking-tight">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {meta.title}
          </Link>
        </h2>

        {/* Excerpt */}
        {meta.excerpt ? <p className="text-base text-black/75">{meta.excerpt}</p> : null}

      </div>
    </article>
  );
}
