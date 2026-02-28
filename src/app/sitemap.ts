import { MetadataRoute } from "next";
import { publications } from "@/app/[locale]/publications/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stehl.ing";
  const locales = ["en", "de"];

  // Generate routes for all locales
  const routes = locales.flatMap((locale) =>
    ["", "/about", "/cv", "/publications", "/books", "/skills", "/now"].map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );

  // Generate publication routes for all locales
  const publicationRoutes = locales.flatMap((locale) =>
    publications.map((pub) => ({
      url: `${baseUrl}/${locale}/publications/${pub.slug}`,
      lastModified: new Date(pub.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  );

  return [...routes, ...publicationRoutes];
}
