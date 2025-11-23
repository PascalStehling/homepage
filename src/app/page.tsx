import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { PublicationCard } from "@/components/publication-card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const publications = getAllPosts("publications")
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
    .slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-linear-to-r from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-500">
          My little corner of the web
        </h1>
        <div className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400 space-y-4">
          <p>
            Hi, I'm Pascal Stehling, a Data Engineer and Data Architect living in Potsdam, a "suburb of Berlin", Germany.
          </p>
          <p>
            To learn more about me, you can find a <Link href="/cv" className="underline underline-offset-4 hover:text-black dark:hover:text-white">short CV</Link> or a longer <Link href="/about" className="underline underline-offset-4 hover:text-black dark:hover:text-white">about section</Link>.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Recent Publications</h2>
          <Link href="/publications" className="group flex items-center text-sm font-medium text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white">
            View all <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub) => (
            <PublicationCard key={pub.slug} slug={pub.slug} metadata={pub.metadata} />
          ))}
        </div>
      </section>
    </div>
  );
}
