import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts("publications");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PublicationPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug("publications", slug);
  } catch (e) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-6">
        <Link href="/publications" className="inline-flex items-center text-sm text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to publications
        </Link>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{formatDate(post.metadata.date)}</span>
            {post.metadata.pub && (
              <>
                <span>•</span>
                <span className="font-medium text-neutral-900 dark:text-neutral-200">{post.metadata.pub}</span>
              </>
            )}
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {post.metadata.title}
          </h1>

          {post.metadata.authors && (
            <div className="text-neutral-600 dark:text-neutral-400">
              By {post.metadata.authors}
            </div>
          )}

          <div className="flex flex-wrap gap-4 pt-2">
            {post.metadata.paperURL && (
               <a href={post.metadata.paperURL.replace(/^.*:\s*/, '')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors text-sm font-medium">
                 Read Paper <ArrowUpRight className="ml-2 h-4 w-4" />
               </a>
            )}
            {post.metadata.codeURL && (
               <a href={post.metadata.codeURL.replace(/^.*:\s*/, '')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-sm font-medium">
                 View Code <ArrowUpRight className="ml-2 h-4 w-4" />
               </a>
            )}
          </div>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
