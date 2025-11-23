"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { socialItems } from "@/lib/personal-data";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "CV", path: "/cv" },
  { name: "Publications", path: "/publications" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
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
                  pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 border-l border-border pl-6 ml-2">
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
                  pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex gap-4 mt-2 pt-4 border-t border-border">
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
      )}
    </nav>
  );
}
