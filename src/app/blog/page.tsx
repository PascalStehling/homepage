import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export default function Blog() {
  const posts = getAllPosts("blog")
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="flex flex-col space-y-3">
            <div className="space-y-1">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {formatDate(post.metadata.date)}
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-black dark:hover:text-white">
                <Link href={`/blog/${post.slug}`}>
                  {post.metadata.title}
                </Link>
              </h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {post.metadata.description}
            </p>
            <div className="pt-2">
              <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
