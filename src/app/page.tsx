import Link from "next/link";
import { publications } from "@/app/publications/data";
import { PublicationCard } from "@/components/publication-card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const recentPublications = publications
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-linear-to-r from-foreground to-stone-600 dark:to-stone-400">
          My little corner of the web
        </h1>
        <div className="max-w-[600px] text-foreground md:text-xl space-y-4">
          <p>
            Hi, I'm Pascal Stehling, a Data Engineer and Data Architect living in Potsdam, a "suburb of Berlin", Germany.
          </p>
          <p>
            To learn more about me, you can find a <Link href="/cv" className="underline underline-offset-4 hover:text-foreground">short CV</Link> or a longer <Link href="/about" className="underline underline-offset-4 hover:text-foreground">about section</Link>.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Recent Publications</h2>
          <Link href="/publications" className="group flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
            View all <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPublications.map((pub) => (
            <PublicationCard key={pub.slug} slug={pub.slug} metadata={pub} />
          ))}
        </div>
      </section>
    </div>
  );
}

