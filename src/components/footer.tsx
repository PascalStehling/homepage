import Link from "next/link";
import { socialItems } from "@/lib/personal-data";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          {socialItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              target={item.target}
              rel={item.rel}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={item.name}
            >
              <item.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
        <div className="text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Pascal Stehling. All rights reserved.
          </p>
          <p className="mt-2">
            Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
