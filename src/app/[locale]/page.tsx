"use client"

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { publications } from "@/app/[locale]/publications/data";
import { PublicationCard } from "@/components/publication-card";
import { SkillsTeaser } from "@/components/skills-teaser";
import { LuArrowRight } from "react-icons/lu";
import { socialItems } from "@/lib/personal-data";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations();
  const recentPublications = publications
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="space-y-6 animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-linear-to-r from-foreground to-stone-600 dark:to-stone-400">
          {t("home.title")}
        </h1>
        <div className="max-w-[600px] text-foreground md:text-xl space-y-4">
          <p>{t("home.bio")}</p>
          <p className="text-muted-foreground">{t("home.description")}</p>
        </div>

        <div className="flex flex-wrap gap-4 items-center pt-2">
          <Link
            href={`/${locale}/cv`}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {t("common.viewCV")}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {t("common.moreAboutMe")}
          </Link>

          <div className="flex items-center gap-2 ml-2 border-l border-border pl-4">
            {socialItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                target={item.target}
                rel={item.rel}
                className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                aria-label={item.name}
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <SkillsTeaser />

      <section className="space-y-8 animate-fade-in-up delay-500">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            {t("home.recentPublications")}
          </h2>
          <Link
            href={`/${locale}/publications`}
            className="group flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            {t("home.viewAll")}{" "}
            <LuArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
