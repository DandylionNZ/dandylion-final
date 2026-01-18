import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  title: string;
  excerpt: string;
  date: string;
};

export type PostListItem = {
  slug: string;
  meta: PostMeta;
};

const postsDirectory = path.join(process.cwd(), "content/posts");

function getSlugFromFilename(filename: string) {
  return filename.replace(/\.md$/, "");
}

export function getAllPosts(): PostListItem[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"));

  const posts: PostListItem[] = filenames.map((filename) => {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    const meta: PostMeta = {
      title: String(data.title ?? "Untitled"),
      excerpt: String(data.excerpt ?? data.description ?? ""),
      date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    };

    return {
      slug: getSlugFromFilename(filename),
      meta,
    };
  });

  // newest first
  posts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );

  return posts;
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const meta: PostMeta = {
    title: String(data.title ?? "Untitled"),
    excerpt: String(data.excerpt ?? data.description ?? ""),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
  };

  return {
    slug,
    meta,
    content,
  };
}
