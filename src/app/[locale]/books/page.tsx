import { BooksTimeline } from "@/components/books-timeline";

export default async function Books({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <BooksTimeline locale={locale} />;
}
