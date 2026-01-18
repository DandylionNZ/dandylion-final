import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  title: string;
  date: string;
  category?: string;
  excerpt?: string;
  coverImage?: string; // optional (e.g. "/images/blog-post.jpg")
};

export type PostListItem = {
  slug: string;
  meta: PostMeta;
};

export type Post = {
  slug: string;
  meta: PostMeta;
  contentHtml: string;
};

const postsDirectory = path.join(process.cwd(), "content/posts");

function getMarkdownFilenames() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"));
}

export function getAllPosts(): PostListItem[] {
  const files = getMarkdownFilenames();

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    const meta: PostMeta = {
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      category: data.category ? String(data.category) : undefined,
      excerpt: data.excerpt ? String(data.excerpt) : undefined,
      coverImage: data.coverImage ? String(data.coverImage) : undefined,
    };

    return { slug, meta };
  });

  // newest first (expects YYYY-MM-DD)
  return posts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  const meta: PostMeta = {
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    category: data.category ? String(data.category) : undefined,
    excerpt: data.excerpt ? String(data.excerpt) : undefined,
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
  };

  return { slug, meta, contentHtml };
}
