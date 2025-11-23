# AI Agent Guide for Pascal Stehling's Homepage

This document provides context and guidelines for AI models working on this codebase.

## Project Overview
This is a personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It was migrated from an Astro project (archived in `_legacy/`).

## Technology Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Utility-first)
- **Icons:** React Icons (`react-icons`)
- **Content Management:** 
    - Publications: `src/app/publications/data.ts`
    - Personal Data (Skills, Socials): `src/lib/personal-data.ts`
- **Theming:** `next-themes` (Dark/Light mode support)
- **Package Manager:** npm

## Directory Structure
- `src/app/`: Application routes (Pages).
    - `page.tsx`: Home page.
    - `about/`, `cv/`, `publications/`: Section pages.
    - `layout.tsx`: Root layout (includes Navbar, Footer, ThemeProvider).
    - `globals.css`: Global styles and Tailwind directives.
    - `sitemap.ts`: Generates `sitemap.xml` for SEO.
    - `robots.ts`: Generates `robots.txt` for SEO.
    - `opengraph-image.tsx`: Generates the dynamic Open Graph image.
- `src/components/`: Reusable UI components (Navbar, Footer, Cards).
- `src/lib/`: Utility functions.
    - `utils.ts`: Helper for Tailwind class merging (`cn`) and date formatting.
    - `personal-data.ts`: Centralized data for skills, interests, and social links.
- `public/`: Static assets (images, PDFs).

## Key Conventions

### 1. Styling
- **Strictly use Tailwind CSS classes.** Do not write custom CSS in `globals.css` unless absolutely necessary for complex animations or global resets.
- Use the `cn()` utility (from `@/lib/utils`) when conditionally applying classes or merging props.
- **Dark Mode:** Always implement dark mode variants using the `dark:` prefix (e.g., `bg-white dark:bg-neutral-950`).
- **Colors:** Use `neutral` (slate/zinc) scales for a clean, monochrome aesthetic.

### 2. Components
- Use **Functional Components** with TypeScript interfaces for props.
- **Icons:** Use `react-icons`. Prefer `react-icons/lu` (Lucide) for UI elements and `react-icons/si` (Simple Icons) for brand logos.
- **Images:** Use `next/image` for all images. Ensure `width` and `height` are provided or use `fill` with a parent container.

### 3. Content
- **Publications:** Stored in `src/app/publications/data.ts`.
- **Personal Data:** Skills, interests, and social links are in `src/lib/personal-data.ts`.
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

### Updating Skills or Social Links
1. Open `src/lib/personal-data.ts`.
2. Update the `mainSkills`, `previousExperience`, `interests`, or `socialItems` arrays.
3. Ensure you import the correct icon from `react-icons` if adding a new item.

### Updating SEO
- **Sitemap:** `src/app/sitemap.ts` automatically includes static routes and publications. Update the `routes` array if adding new static pages.
- **Metadata:** Update `src/app/layout.tsx` for global metadata.

### Modifying the Design
- **Theme Colors:** Adjusted in `src/app/globals.css` (CSS variables) or `tailwind.config.ts` (if customized).
- **Layout:** `src/app/layout.tsx` controls the global wrapper (Navbar/Footer).

## Important Notes
- The `_legacy/` folder contains the old Astro project. **Do not edit files in `_legacy/`** unless you are retrieving old content/logic to migrate.
- Ensure all new components are responsive (mobile-first approach).
