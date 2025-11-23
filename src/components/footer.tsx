export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Pascal Stehling. All rights reserved.
        </p>
        <p className="mt-2">
          Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
