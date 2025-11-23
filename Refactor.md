# Refactoring Plan: Astro to Next.js

## Goal
Migrate the personal website from Astro to **Next.js (App Router)** with **Tailwind CSS**.
**Focus:** Minimalist design, easy maintenance, "Vercel-native" stack, AI-friendly codebase.

## Technology Stack
*   **Framework:** Next.js 14+ (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Content:** MDX (Markdown + React components)
*   **Icons:** Lucide React
*   **Deployment:** Vercel

## Step-by-Step Implementation Plan

### Phase 1: Project Initialization & Cleanup
1.  **Backup:** Ensure the current repo is safe (git commit).
2.  **New Project:** Initialize a fresh Next.js app.
    *   `npx create-next-app@latest . --typescript --tailwind --eslint` (We might need to move files to a `_backup` folder first to allow this in the root, or create in a subfolder and move).
3.  **Dependencies:** Install essential UI libraries.
    *   `npm install next-themes` (for Dark Mode)
    *   `npm install lucide-react` (for Icons)
    *   `npm install -D @tailwindcss/typography` (for nice Markdown styling)
    *   `npm install gray-matter next-mdx-remote` (for handling Markdown content)

### Phase 2: Core Architecture (The "Skeleton")
1.  **Layout (`app/layout.tsx`):**
    *   Setup the global HTML structure.
    *   Add the `ThemeProvider` for dark mode support.
    *   Add a global `Navbar` and `Footer`.
2.  **Navigation:**
    *   Create a responsive `Navbar` component.
    *   Links: Home, About, CV, Blog, Publications.
3.  **Design System:**
    *   Define a simple color palette in `tailwind.config.ts` (likely slate/zinc/neutral colors for a clean look).

### Phase 3: Content Migration (The "Data")
1.  **Assets:** Move everything from `public/` (images, PDFs) to the new `public/` folder.
2.  **Markdown Content:**
    *   Move `src/content/blog` -> `content/blog`
    *   Move `src/content/publications` -> `content/publications`
3.  **MDX Utility:**
    *   Create `lib/mdx.ts`: A helper function to read files from the `content/` directory using `fs` and `gray-matter`. This replaces Astro's `getCollection`.

### Phase 4: Page Migration
1.  **Home (`app/page.tsx`):**
    *   Recreate the "Hero" section.
    *   Fetch and display the latest 3 publications (using the `lib/mdx.ts` helper).
2.  **About (`app/about/page.tsx`):**
    *   Migrate the text and images.
    *   Use `next/image` for optimized image loading.
3.  **CV (`app/cv/page.tsx`):**
    *   Migrate the hardcoded `works` and `educations` arrays from `cv.astro`.
    *   Create a `Timeline` or `CVCard` component to display these items nicely.

### Phase 5: Blog & Publications System
1.  **Blog Index (`app/blog/page.tsx`):**
    *   List all blog posts, sorted by date.
2.  **Blog Post (`app/blog/[slug]/page.tsx`):**
    *   Render the individual markdown file using `next-mdx-remote`.
    *   Apply `@tailwindcss/typography` (`prose` class) to automatically style the markdown.
3.  **Publications (`app/publications/page.tsx`):**
    *   List all publications.
    *   Create a `PublicationCard` component to show title, authors, and links (PDF, Code, etc.).

### Phase 6: Design Polish (The "AI" Part)
*   **Dark Mode:** Ensure all components look good in dark mode.
*   **Typography:** Use `next/font` to load a clean font (e.g., Inter or Geist Sans).
*   **Micro-interactions:** Add subtle hover effects to cards and links.

## Design Ideas (Modern & Minimalist)
*   **"Geist" Aesthetic:** High contrast, monochrome with subtle borders, very clean typography. (Like Vercel's dashboard).
*   **Bento Grids:** For the "About" page, instead of just text + image, use a grid layout to show "Tech Stack", "Location", "Photo", "Current Role" in a visual way.
*   **Timeline for CV:** A vertical line connecting the experience items makes it look more like a journey.

## Next Steps
1.  I will move the current source code to a `_legacy` folder so we have a clean slate.
2.  I will initialize the Next.js app.
3.  I will start copying over the assets and content.
