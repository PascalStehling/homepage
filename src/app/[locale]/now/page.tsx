import { getTranslations } from "next-intl/server";
import { books, nonTechnicalInterests, workExperience, skillCategories } from "@/lib/personal-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "now" });
  const isGerman = locale === "de";
  return {
    title: t("title"),
    description: isGerman
      ? "Was Pascal Stehling gerade macht - aktuelle Projekte, Bücher und Interessen."
      : "What Pascal Stehling is up to right now - current projects, books, and interests.",
    alternates: {
      canonical: `https://stehl.ing/${locale}/now`,
      languages: { en: "https://stehl.ing/en/now", de: "https://stehl.ing/de/now" },
    },
  };
}

export default async function Now({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "now" });

  const currentWork = workExperience.filter((w) => !w.endYear);
  const currentlyReading = books.filter((b) => b.now);
  const learningSkills = skillCategories
    .flatMap((cat) => cat.skills)
    .filter((s) => s.now);
  const currentHobbies = nonTechnicalInterests
    .filter((h) => h.now)
    .sort((a, b) => b.startYear - a.startYear);

  return (
    <div className="max-w-2xl mx-auto space-y-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
        <p className="text-xs text-muted-foreground">
          {t("lastUpdated")}: {locale === "de" ? "Februar 2026" : "February 2026"}
        </p>
      </div>

      {/* At Work */}
      {currentWork.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">{t("atWork")}</h2>
          <ul className="space-y-3">
            {currentWork.map((w) => (
              <li key={w.company} className="space-y-1">
                <p className="font-medium">{w.jobTitle} — {w.company}</p>
                <p className="text-sm text-muted-foreground">{w.description[locale as "en" | "de"]}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Currently Reading */}
      {currentlyReading.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">{t("reading")}</h2>
          <ul className="space-y-1">
            {currentlyReading.map((b) => (
              <li key={b.slug} className="text-sm">
                <span className="font-medium">{b.title[locale as "en" | "de"]}</span>
                <span className="text-muted-foreground"> — {b.author}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Currently Learning */}
      {learningSkills.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">{t("learning")}</h2>
          <ul className="space-y-1">
            {learningSkills.map((s) => (
              <li key={s.name} className="text-sm font-medium">{s.name}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Currently Doing */}
      {currentHobbies.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">{t("doing")}</h2>
          <ul className="space-y-3">
            {currentHobbies.map((h) => (
              <li key={h.name.en} className="space-y-1">
                <p className="font-medium">{h.name[locale as "en" | "de"]}</p>
                <p className="text-sm text-muted-foreground">{h.description[locale as "en" | "de"]}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
