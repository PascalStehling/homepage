export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
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
