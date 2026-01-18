import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
export const dynamicParams = true;


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.meta.title} | Dandylion Marketing`,
    description: post.meta.excerpt ?? post.meta.description ?? undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10">
  {post.meta.category ? (
    <p className="text-sm font-medium text-[#2F2F2C]/60">
      {post.meta.category}
    </p>
  ) : null}

  <p className="text-sm text-[#2F2F2C]/60">{post.meta.date}</p>
  <h1 className="mt-2 text-4xl font-semibold tracking-tight">{post.meta.title}</h1>

  {post.meta.excerpt ? (
    <p className="mt-4 text-lg text-[#2F2F2C]/75">{post.meta.excerpt}</p>
  ) : null}
</header>


        <div
          className="prose prose-neutral max-w-none prose-headings:tracking-tight prose-a:text-[#2F2F2C]"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
