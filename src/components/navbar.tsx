"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import { useTheme } from "next-themes";
import { useEffect, useState, useTransition } from "react";
import { socialItems } from "@/lib/personal-data";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const t = useTranslations("navbar");
  // Extract locale directly from pathname to ensure highlighting updates immediately
  const locale = pathname.split("/")[1] || currentLocale;
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, startTransition] = useTransition();

  const navItems = [
    { nameKey: "home", path: "/" },
    { nameKey: "about", path: "/about" },
    { nameKey: "cv", path: "/cv" },
    { nameKey: "skills", path: "/skills" },
    { nameKey: "publications", path: "/publications" },
    { nameKey: "books", path: "/books" },
  ];

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Pascal Stehling
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  pathname.includes(item.path) && item.path !== "/"
                    ? "text-foreground"
                    : pathname === "/" && item.path === "/"
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {t(item.nameKey)}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 border-l border-border pl-6 ml-2">
            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              {["en", "de"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => switchLanguage(lang)}
                  className={cn(
                    "px-2 py-1 rounded text-xs font-medium transition-colors",
                    locale === lang
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {socialItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                target={item.target}
                rel={item.rel}
                className="p-2 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                aria-label={item.name}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <LuSun className="h-5 w-5" />
              ) : (
                <LuMoon className="h-5 w-5" />
              )}
            </button>
          )}

          <button
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <LuX className="h-5 w-5" />
            ) : (
              <LuMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground py-2",
                  pathname.includes(item.path) && item.path !== "/"
                    ? "text-foreground"
                    : pathname === "/" && item.path === "/"
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item.nameKey)}
              </Link>
            ))}

            <div className="flex flex-col gap-4 mt-2 pt-4 border-t border-border">
              {/* Language Switcher Mobile */}
              <div className="flex gap-2">
                {["en", "de"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      switchLanguage(lang);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "px-3 py-1 rounded text-sm font-medium transition-colors",
                      locale === lang
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                {socialItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    target={item.target}
                    rel={item.rel}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
