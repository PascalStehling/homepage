"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { formatDate } from "@/lib/utils";
import { LuArrowUpRight } from "react-icons/lu";
import { Publication } from "@/app/[locale]/publications/data";

interface PublicationCardProps {
  slug: string;
  metadata: Publication;
}

export function PublicationCard({ slug, metadata }: PublicationCardProps) {
  const locale = useLocale();

  return (
    <div className="group relative flex flex-col space-y-3 rounded-lg border border-border p-6 transition-all duration-300 hover:bg-accent hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          {metadata.date ? new Date(metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : ''}
        </span>
        {metadata.pub && (
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
            {metadata.pub}
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-foreground">
        <Link href={`/${locale}/publications/${slug}`} className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          {metadata.title}
        </Link>
      </h3>
      
      <p className="text-muted-foreground line-clamp-3">
        {metadata.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2 relative z-10">
        {metadata.paperURL && (
           <a href={metadata.paperURL.replace(/^.*:\s*/, '')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
             Paper <LuArrowUpRight className="ml-1 h-3 w-3" />
           </a>
        )}
        {metadata.codeURL && (
           <a href={metadata.codeURL.replace(/^.*:\s*/, '')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
             Code <LuArrowUpRight className="ml-1 h-3 w-3" />
           </a>
        )}
      </div>
    </div>
  );
}
