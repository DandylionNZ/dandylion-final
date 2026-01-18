import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO or YYYY-MM-DD
  description: string;
  category?: string;
  author?: string;
  coverImage?: string; // e.g. "/images/blog-post.jpg"
};

const postsDirectory = path.join(process.cwd(), "content/posts");

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

export function getAllPosts(): PostMeta[] {
  const files = getMarkdownFiles();

  const posts: PostMeta[] = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const title = (data.title as string) || slug.replace(/-/g, " ");
    const date = (data.date as string) || "2026-01-01";
    const description =
      (data.description as string) ||
      (data.excerpt as string) ||
      "A practical insight from Dandylion Strategy.";

    return {
      slug,
      title,
      date,
      description,
      category: data.category as string | undefined,
      author: data.author as string | undefined,
      coverImage: (data.coverImage as string | undefined) || "/images/blog-post.jpg",
    };
  });

  // newest first (works best if you use YYYY-MM-DD)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export async function getPostBySlug(slug: string): Promise<{
  meta: PostMeta;
  contentHtml: string;
}> {
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);

  let fullPath = "";
  if (fs.existsSync(mdPath)) fullPath = mdPath;
  else if (fs.existsSync(mdxPath)) fullPath = mdxPath;
  else throw new Error(`Post not found: ${slug}`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const meta: PostMeta = {
    slug,
    title: (data.title as string) || slug.replace(/-/g, " "),
    date: (data.date as string) || "2026-01-01",
    description:
      (data.description as string) ||
      (data.excerpt as string) ||
      "A practical insight from Dandylion Strategy.",
    category: data.category as string | undefined,
    author: data.author as string | undefined,
    coverImage: (data.coverImage as string | undefined) || "/images/blog-post.jpg",
  };

  return { meta, contentHtml };
}
