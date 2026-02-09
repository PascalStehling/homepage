"use client";

import { useTranslations } from "next-intl";
import { books, Book } from "@/lib/personal-data";
import { BookCardEnhanced } from "./book-card-enhanced";

interface BookColumnProps {
  books: Book[];
}

function BookColumn({ books: booksToShow }: BookColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      {booksToShow.map((book) => (
        <div key={book.slug} className="bg-card border border-border rounded-lg p-3 hover:shadow-md transition-shadow">
          <BookCardEnhanced book={book} />
        </div>
      ))}
    </div>
  );
}

interface YearSectionProps {
  year: number;
  technicalBooks: Book[];
  nonTechnicalBooks: Book[];
}

function YearSection({
  year,
  technicalBooks,
  nonTechnicalBooks,
}: YearSectionProps) {
  return (
    <div className="relative">
      {/* Year marker - centered on timeline */}
      <div className="flex justify-center mb-6">
        <div className="text-3xl font-bold text-foreground">{year}</div>
      </div>

      {/* Books in two columns */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left side - Fictional books */}
        <BookColumn books={technicalBooks} />

        {/* Right side - Non-fictional books */}
        <BookColumn books={nonTechnicalBooks} />
      </div>
    </div>
  );
}

interface TimelineLegendProps {
  items: Array<{ color: string; label: string }>;
}

function TimelineLegend({ items, legendLabel }: TimelineLegendProps & { legendLabel: string }) {
  return (
    <div className="pt-8 border-t border-border space-y-4">
      <h2 className="text-lg font-semibold">{legendLabel}</h2>
      <div className="flex gap-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${item.color}`}></div>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function groupBooksByYear(books: Book[]) {
  return books.reduce(
    (acc, book) => {
      const year = book.yearRead;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(book);
      return acc;
    },
    {} as Record<number, Book[]>
  );
}

interface TimelineProps {
  years: number[];
  booksByYear: Record<number, Book[]>;
}

function Timeline({ years, booksByYear }: TimelineProps) {
  return (
    <div className="relative space-y-16">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

      {/* Years and books */}
      {years.map((year) => {
        const yearBooks = booksByYear[year];
        const fictionalBooks = yearBooks.filter(
          (b) => b.category === "fictional"
        );
        const nonFictionalBooks = yearBooks.filter(
          (b) => b.category === "non-fictional"
        );

        return (
          <YearSection
            key={year}
            year={year}
            technicalBooks={fictionalBooks}
            nonTechnicalBooks={nonFictionalBooks}
          />
        );
      })}
    </div>
  );
}

export function BooksTimeline() {
  const t = useTranslations("books");

  // Sort books by year read
  const sortedBooks = [...books].sort((a, b) => a.yearRead - b.yearRead);

  // Group books by year
  const booksByYear = groupBooksByYear(sortedBooks);
  // Sort years in descending order (latest first)
  const years = Object.keys(booksByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const legend = [
    { color: "bg-rose-500", label: t("fictional") },
    { color: "bg-blue-500", label: t("nonFictional") },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-lg text-muted-foreground">
          {t("description")}
        </p>
      </div>

      <Timeline years={years} booksByYear={booksByYear} />

      <TimelineLegend items={legend} legendLabel={t("legend")} />
    </div>
  );
}
