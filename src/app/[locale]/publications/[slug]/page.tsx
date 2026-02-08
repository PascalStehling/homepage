import { publications } from "@/app/[locale]/publications/data";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { LuArrowLeft, LuArrowUpRight } from "react-icons/lu";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return publications.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PublicationPost({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const post = publications.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-6">
        <Link href="/publications" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
          <LuArrowLeft className="mr-2 h-4 w-4" />
          Back to publications
        </Link>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            {post.pub && (
              <>
                <span>•</span>
                <span className="font-medium text-foreground">{post.pub}</span>
              </>
            )}
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          {post.authors && (
            <div className="text-muted-foreground">
              By {post.authors}
            </div>
          )}

          <div className="flex flex-wrap gap-4 pt-2">
            {post.paperURL && (
               <a href={post.paperURL.replace(/^.*:\s*/, '')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium">
                 Read Paper <LuArrowUpRight className="ml-2 h-4 w-4" />
               </a>
            )}
            {post.codeURL && (
               <a href={post.codeURL.replace(/^.*:\s*/, '')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors text-sm font-medium">
                 View Code <LuArrowUpRight className="ml-2 h-4 w-4" />
               </a>
            )}
          </div>
        </div>
      </div>

      <div className="prose prose-stone dark:prose-invert max-w-none">
        <p>{post.description}</p>
        {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
      </div>
    </article>
  );
}

