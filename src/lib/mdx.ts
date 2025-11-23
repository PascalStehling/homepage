import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export type Post = {
  slug: string;
  metadata: Record<string, any>;
  content: string;
};

export function getFiles(type: string) {
  const prefixPaths = path.join(root, "content", type);
  if (!fs.existsSync(prefixPaths)) {
    return [];
  }
  const files = fs.readdirSync(prefixPaths);
  return files.filter((file) => !file.startsWith("."));
}

export function getPostBySlug(type: string, slug: string): Post {
  const source = fs.readFileSync(
    path.join(root, "content", type, `${slug}.mdx`), // Assuming .mdx, check for .md too if needed
    "utf8"
  );

  const { data, content } = matter(source);

  return {
    slug,
    metadata: data,
    content,
  };
}

export function getAllPosts(type: string) {
  const files = getFiles(type);

  return files.reduce((allPosts: Post[], postSlug) => {
    const slug = postSlug.replace(/\.mdx?$/, ""); // Remove extension
    const source = fs.readFileSync(
      path.join(root, "content", type, postSlug),
      "utf8"
    );
    const { data, content } = matter(source);

    return [
      {
        slug,
        metadata: data,
        content,
      },
      ...allPosts,
    ];
  }, []);
}
