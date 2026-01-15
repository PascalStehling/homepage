"use client";

import { Book } from "@/lib/personal-data";
import { LuArrowUpRight } from "react-icons/lu";
import { useState } from "react";
import Image from "next/image";

interface BookCardProps {
  book: Book;
}

const categoryBadgeColors = {
  fictional: "bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300",
  "non-fictional": "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
};

export function BookCardEnhanced({ book }: BookCardProps) {
  const [imageError, setImageError] = useState(false);

  // Use Open Library covers - only displays real covers, no placeholders
  const coverUrl = book.isbn
    ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg?default=false`
    : null;

  return (
    <div className="flex gap-4 h-full">
      {/* Book Cover - Only show if image is available */}
      {coverUrl && !imageError && (
        <div className="relative w-24 h-32 shrink-0 rounded-lg overflow-hidden border border-border bg-muted">
          <Image
            src={coverUrl}
            alt={`${book.title} cover`}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 80px, 96px"
          />
        </div>
      )}

      {/* Book Info */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <h3 className="font-semibold text-foreground text-sm tracking-tight line-clamp-2">
            {book.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{book.author}</p>

          {/* Category Badge */}
          <div className="mt-2">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full inline-block ${
                categoryBadgeColors[book.category]
              }`}
            >
              {book.category === "fictional" ? "Fiction" : "Non-Fiction"}
            </span>
          </div>
        </div>

        {/* Links */}
        {book.gutenbergURL && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
            <a
              href={book.gutenbergURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-medium text-primary hover:underline"
            >
              Read <LuArrowUpRight className="ml-1 h-2 w-2" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
