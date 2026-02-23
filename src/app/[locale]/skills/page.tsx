import { getTranslations } from "next-intl/server";
import { skillCategories, milestones, nonTechnicalInterests } from "@/lib/personal-data";
import { TimelineBar } from "@/components/timeline-bar";
import { START_YEAR, END_YEAR, TOTAL_YEARS, getPosition } from "@/lib/timeline-utils";

const proficiencyColors = {
  advanced: "bg-emerald-500",
  proficient: "bg-blue-500",
  experienced: "bg-amber-500",
  learning: "bg-purple-500",
};

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const allSkills = skillCategories
    .flatMap((cat) => cat.skills)
    .sort((a, b) => a.startYear - b.startYear);

  const education = milestones.filter((m) => m.type === "education");
  const work = milestones.filter((m) => m.type === "work");
  const years = Array.from({ length: TOTAL_YEARS + 1 }, (_, i) => START_YEAR + i);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{t("skills.title")}</h1>
        <p className="text-lg text-muted-foreground">{t("skills.description")}</p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-200 relative">
          {/* Year Headers */}
          <div className="sticky top-0 bg-background z-20 pb-4 border-b-2 border-border">
            <div className="relative h-8">
              {years.map((year) => (
                <div
                  key={year}
                  className="absolute text-sm font-semibold"
                  style={{ left: `${getPosition(year)}%` }}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Year Lines */}
          <div className="absolute left-0 right-0" style={{ top: "48px", bottom: 0 }}>
            {years.map((year) => (
              <div
                key={`line-${year}`}
                className="absolute top-0 bottom-0 w-px bg-border/30"
                style={{ left: `${getPosition(year)}%` }}
              />
            ))}
          </div>

          {/* Timeline Sections */}
          <div className="space-y-6 py-6 relative">
            {/* Education */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                {t("cv.education")}
              </h3>
              <div className="space-y-1">
                {education.map((item) => (
                  <TimelineBar
                    key={`edu-${item.startYear}-${item.title}`}
                    item={{ startYear: item.startYear, endYear: item.endYear }}
                    title={item.title}
                    subtitle={item.description}
                    color="bg-blue-500"
                    iconType="education"
                  />
                ))}
              </div>
            </div>

            {/* Work */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                {t("cv.workExperience")}
              </h3>
              <div className="space-y-1">
                {work.map((item) => (
                  <TimelineBar
                    key={`work-${item.startYear}-${item.title}`}
                    item={{ startYear: item.startYear, endYear: item.endYear }}
                    title={item.title}
                    subtitle={item.description}
                    color="bg-emerald-500"
                    iconType="work"
                  />
                ))}
              </div>
            </div>

            {/* Personal Interests */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Personal Interests
              </h3>
              <div className="space-y-1">
                {nonTechnicalInterests.map((item) => (
                  <TimelineBar
                    key={`interest-${item.startYear}-${item.name.en}`}
                    item={{ startYear: item.startYear, endYear: item.endYear }}
                    title={item.name[locale as "en" | "de"] || item.name.en}
                    subtitle={item.description[locale as "en" | "de"] || item.description.en}
                    color="bg-rose-500"
                    iconType="interest"
                  />
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                {t("cv.skills")}
              </h3>
              <div className="space-y-1">
                {allSkills.map((skill) => (
                  <TimelineBar
                    key={`skill-${skill.startYear}-${skill.name}`}
                    item={{ startYear: skill.startYear, endYear: skill.endYear }}
                    title={skill.name}
                    subtitle={skill.proficiency}
                    color={proficiencyColors[skill.proficiency as keyof typeof proficiencyColors]}
                    iconType="interest"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="pt-8 border-t border-border">
        <h2 className="text-lg font-semibold mb-4">Legend</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Categories</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-blue-500"></div>
                <span>{t("cv.education")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-emerald-500"></div>
                <span>{t("cv.workExperience")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-rose-500"></div>
                <span>Personal Interests</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Proficiency</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-emerald-500"></div>
                <span>{t("proficiency.advanced")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-blue-500"></div>
                <span>{t("proficiency.proficient")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-amber-500"></div>
                <span>{t("proficiency.experienced")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-purple-500"></div>
                <span>{t("proficiency.learning")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
