"use client"

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { workExperience, educationHistory, interests, mainSkills, previousExperience } from "@/lib/personal-data";

function TimelineItem({ item, locale, last }: { item: any; locale: string; last?: boolean }) {
  const isWork = "company" in item;
  const title = isWork ? item.jobTitle : item.degree;
  const organization = isWork ? item.company : item.school;
  const timeRange = `${item.startYear}-${item.endYear || "present"}`;
  const description = item.description[locale as 'en' | 'de'] || item.description.en;

  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {!last && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border group-hover:bg-neutral-400 dark:group-hover:bg-neutral-600 transition-colors duration-300" />
      )}
      <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-background bg-border group-hover:bg-neutral-800 dark:group-hover:bg-neutral-200 group-hover:scale-110 transition-all duration-300 z-10" />

      <div className="space-y-2 transition-transform duration-300 group-hover:translate-x-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="font-semibold text-lg text-foreground">
            {title}
          </h3>
          <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
            {timeRange}
          </span>
        </div>

        <div className="text-sm font-medium text-foreground">
          {organization} • {item.location}
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CV() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale || "en") as 'en' | 'de';

  return (
    <div className="max-w-3xl mx-auto space-y-16">
      <section className="animate-fade-in-up">
        <h2 className="text-2xl font-bold tracking-tight mb-8">{t("cv.workExperience")}</h2>
        <div className="space-y-0">
          {workExperience.map((work, i) => (
            <TimelineItem
              key={i}
              item={work}
              locale={locale}
              last={i === workExperience.length - 1}
            />
          ))}
        </div>
      </section>

      <section className="animate-fade-in-up delay-200">
        <h2 className="text-2xl font-bold tracking-tight mb-8">{t("cv.education")}</h2>
        <div className="space-y-0">
          {educationHistory.map((edu, i) => (
            <TimelineItem
              key={i}
              item={edu}
              locale={locale}
              last={i === educationHistory.length - 1}
            />
          ))}
        </div>
      </section>

      <section className="animate-fade-in-up delay-500">
        <h2 className="text-2xl font-bold tracking-tight mb-8">{t("cv.skills")}</h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">{t("cvSkills.mainSkills")}</h3>
            <div className="flex flex-wrap gap-2">
              {mainSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center rounded-md border border-transparent bg-primary/10 px-2.5 py-0.5 text-sm font-semibold text-foreground transition-colors hover:bg-primary/20"
                >
                  <skill.icon className="mr-1.5 h-3.5 w-3.5" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-muted-foreground">{t("skillCategories.previousExperience")}</h3>
            <div className="flex flex-wrap gap-2">
              {previousExperience.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center rounded-md border border-transparent bg-muted px-2.5 py-0.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/80"
                >
                  <skill.icon className="mr-1.5 h-3.5 w-3.5" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">{t("cv.interests")}</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest.name}
                  className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80"
                >
                  <interest.icon className="mr-1.5 h-3.5 w-3.5" />
                  {interest.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
