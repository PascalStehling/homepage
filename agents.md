# AI Agent Guide for Pascal Stehling's Homepage

This document provides context and guidelines for AI models working on this codebase.

## Project Overview
This is a personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It was migrated from an Astro project (archived in `_legacy/`).

## Technology Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Utility-first)
- **Icons:** Lucide React
- **Content Management:** Static data in `src/app/publications/data.ts`.
- **Theming:** `next-themes` (Dark/Light mode support)
- **Package Manager:** npm

## Directory Structure
- `src/app/`: Application routes (Pages).
    - `page.tsx`: Home page.
    - `about/`, `cv/`, `publications/`: Section pages.
    - `layout.tsx`: Root layout (includes Navbar, Footer, ThemeProvider).
    - `globals.css`: Global styles and Tailwind directives.
- `src/components/`: Reusable UI components (Navbar, Footer, Cards).
- `src/lib/`: Utility functions.
    - `utils.ts`: Helper for Tailwind class merging (`cn`) and date formatting.
- `public/`: Static assets (images, PDFs).

## Key Conventions

### 1. Styling
- **Strictly use Tailwind CSS classes.** Do not write custom CSS in `globals.css` unless absolutely necessary for complex animations or global resets.
- Use the `cn()` utility (from `@/lib/utils`) when conditionally applying classes or merging props.
- **Dark Mode:** Always implement dark mode variants using the `dark:` prefix (e.g., `bg-white dark:bg-neutral-950`).
- **Colors:** Use `neutral` (slate/zinc) scales for a clean, monochrome aesthetic.

### 2. Components
- Use **Functional Components** with TypeScript interfaces for props.
- **Icons:** Use `lucide-react`. Import specific icons (e.g., `import { ArrowRight } from "lucide-react"`).
- **Images:** Use `next/image` for all images. Ensure `width` and `height` are provided or use `fill` with a parent container.

### 3. Content
- Content is stored in `src/app/publications/data.ts` as a static array.
- **Fetching:** Import the data directly in Server Components.

### 4. Routing
- Use standard Next.js App Router conventions.
- Dynamic routes are handled via `[slug]` folders (e.g., `src/app/publications/[slug]/page.tsx`).
- Use `generateStaticParams` in dynamic routes to enable Static Site Generation (SSG) by mapping over the static data.

## Common Tasks

### Adding a New Page
1. Create a folder in `src/app/` (e.g., `src/app/projects`).
2. Add a `page.tsx` file.
3. Add a link to `src/components/navbar.tsx`.

### Adding a Publication
1. Open `src/app/publications/data.ts`.
2. Add a new object to the `publications` array.


### Modifying the Design
- **Theme Colors:** Adjusted in `src/app/globals.css` (CSS variables) or `tailwind.config.ts` (if customized).
- **Layout:** `src/app/layout.tsx` controls the global wrapper (Navbar/Footer).

## Important Notes
- The `_legacy/` folder contains the old Astro project. **Do not edit files in `_legacy/`** unless you are retrieving old content/logic to migrate.
- Ensure all new components are responsive (mobile-first approach).
