import { publications } from "@/app/publications/data";
import { PublicationCard } from "@/components/publication-card";

export default function Publications() {
  const sortedPublications = publications
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-10">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Publications</h1>
        <p className="text-muted-foreground">
          A collection of my academic papers, theses, and other publications.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedPublications.map((pub) => (
          <PublicationCard key={pub.slug} slug={pub.slug} metadata={pub} />
        ))}
      </div>
    </div>
  );
}

