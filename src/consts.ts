import type { Metadata, Site } from "@types";

export const SITE: Site = {
  TITLE: "Pascal Stehling's web address",
  DESCRIPTION: "My own little place in the Web :)",
  EMAIL: "web@stehl.ing",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 3,
  SITEURL: "https://stehl.ing", // Update here to link the RSS icon to your website rss
};

export const HIGHLIGHTAUTHOR = "Pascal Stehling";

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "My small Home Page",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const RESEARCH: Metadata = {
  TITLE: "Publications",
  DESCRIPTION:
    "A collection of my publications with links to paper, repositories and live demos.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION: "My CV",
};

export const TAGS: Metadata = {
  TITLE: "TAGS",
  DESCRIPTION: "blog tag filter",
};

export const ABOUT: Metadata = {
  TITLE: "ABOUT",
  DESCRIPTION: "A self-intro",
};
