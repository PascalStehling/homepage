import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
// import preact from '@astrojs/preact';
import { defineConfig } from "astro/config";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeKatex from "rehype-katex";
import remarkEmoji from "remark-emoji";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "pascal.stehl.ing",
  integrations: [tailwind(), sitemap(), mdx({
    shikiConfig: {
      theme: "css-variables",
    },
    rehypePlugins: [rehypeHeadingIds, rehypeAccessibleEmojis, rehypeKatex],
    remarkPlugins: [remarkToc, remarkMath, remarkEmoji],
  }), pagefind()],
  server: { port: 1234, host: true },
});
