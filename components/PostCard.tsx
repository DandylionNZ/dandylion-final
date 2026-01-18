import Link from "next/link";
import type { PostListItem } from "@/lib/posts";

export default function PostCard({ post }: { post: PostListItem }) {
  const { slug, meta } = post;

  return (
    <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2">
        {meta.date ? <p className="text-sm text-black/60">{meta.date}</p> : null}

        <h2 className="text-xl font-semibold tracking-tight">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {meta.title}
          </Link>
        </h2>

        {meta.excerpt ? <p className="text-base text-black/75">{meta.excerpt}</p> : null}

        {meta.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {meta.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
