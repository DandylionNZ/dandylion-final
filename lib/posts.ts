import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  title: string;
  date: string;
  category?: string;
  excerpt?: string;
  description?: string;
  coverImage?: string;
  tags?: string[];
};

export type PostListItem = { slug: string; meta: PostMeta };

export type Post = {
  slug: string;
  meta: PostMeta;
  content: string; // markdown
  contentHtml: string; // html
};

function normalizeMeta(meta: any): PostMeta {
  return {
    title: String(meta?.title ?? "Untitled"),
    date: String(meta?.date ?? ""),
    category: meta?.category ? String(meta.category) : undefined,
    excerpt: meta?.excerpt ? String(meta.excerpt) : undefined,
    description: meta?.description ? String(meta.description) : undefined,
    coverImage: meta?.coverImage ? String(meta.coverImage) : undefined,
    tags: Array.isArray(meta?.tags) ? meta.tags.map(String) : undefined,
  };
}

async function getPostFileSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(postsDirectory);
    return files.filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<PostListItem[]> {
  const slugs = await getPostFileSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const fullPath = path.join(postsDirectory, `${slug}.md`);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        meta: normalizeMeta(data),
      };
    })
  );

  posts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const safeSlug = slug.replace(/^\/+|\/+$/g, "");
  const fullPath = path.join(postsDirectory, `${safeSlug}.md`);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processed = await remark().use(html, { sanitize: false }).process(content);
    const contentHtml = processed.toString();

    return {
      slug: safeSlug,
      meta: normalizeMeta(data),
      content,
      contentHtml,
    };
  } catch {
    return null;
  }
}
