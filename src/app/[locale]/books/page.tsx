import type { Metadata } from "next";
import { BooksTimeline } from "@/components/books-timeline";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === "de";
  return {
    title: isGerman ? "Bücher" : "Books",
    description: isGerman
      ? "Alle Bücher, die Pascal Stehling gelesen hat - sortiert nach Jahr."
      : "All books Pascal Stehling has read, sorted by year.",
    alternates: {
      canonical: `https://stehl.ing/${locale}/books`,
      languages: { en: "https://stehl.ing/en/books", de: "https://stehl.ing/de/books" },
    },
  };
}

export default async function Books({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <BooksTimeline locale={locale} />;
}
