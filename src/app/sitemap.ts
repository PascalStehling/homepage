import { MetadataRoute } from "next";
import { publications } from "@/app/publications/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stehl.ing";

  const routes = [
    "",
    "/about",
    "/cv",
    "/publications",
    "/books",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const publicationRoutes = publications.map((pub) => ({
    url: `${baseUrl}/publications/${pub.slug}`,
    lastModified: new Date(pub.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...routes, ...publicationRoutes];
}
