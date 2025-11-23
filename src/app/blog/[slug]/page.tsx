import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug("blog", slug);
  } catch (e) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-4">
        <Link href="/blog" className="inline-flex items-center text-sm text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>
        
        <div className="space-y-2">
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            {formatDate(post.metadata.date)}
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {post.metadata.title}
          </h1>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
