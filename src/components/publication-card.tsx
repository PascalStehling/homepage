import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Publication } from "@/app/publications/data";

interface PublicationCardProps {
  slug: string;
  metadata: Publication;
}

export function PublicationCard({ slug, metadata }: PublicationCardProps) {
  return (
    <div className="group flex flex-col space-y-3 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900">
      <div className="flex items-center justify-between">
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {metadata.date ? new Date(metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : ''}
        </span>
        {metadata.pub && (
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
            {metadata.pub}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-black dark:group-hover:text-white">
        <Link href={`/publications/${slug}`} className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          {metadata.title}
        </Link>
      </h3>
      
      <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
        {metadata.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2 relative z-10">
        {metadata.paperURL && (
           <a href={metadata.paperURL.replace(/^.*:\s*/, '')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
             Paper <ArrowUpRight className="ml-1 h-3 w-3" />
           </a>
        )}
        {metadata.codeURL && (
           <a href={metadata.codeURL.replace(/^.*:\s*/, '')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
             Code <ArrowUpRight className="ml-1 h-3 w-3" />
           </a>
        )}
      </div>
    </div>
  );
}
