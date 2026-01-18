import Image from "next/image";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { meta } = await getPostBySlug(params.slug);
    return {
      title: `${meta.title} | Dandylion Strategy`,
      description: meta.description,
    };
  } catch {
    return {
      title: "Blog | Dandylion Strategy",
    };
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { meta, contentHtml } = await getPostBySlug(params.slug);

  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2C]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#8F9B85]/25">
        <div className="absolute inset-0">
          <Image
            src={meta.coverImage || "/images/blog-post.jpg"}
            alt={meta.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF7F2]/72" />
          <div className="absolute inset-0 bg-[#8F9B85]/12" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {meta.title}
          </h1>

          <p className="mt-4 text-sm opacity-75">
            {(meta.author || "Dandylion Strategy")} • {meta.date}
          </p>

          <p className="mt-6 text-lg leading-relaxed opacity-80">
            {meta.description}
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-3xl px-6 py-14">
        <article
          className="prose prose-neutral max-w-none prose-headings:tracking-tight prose-a:break-words"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>
    </main>
  );
}
