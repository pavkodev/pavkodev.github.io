import {
  htmlInfo as html,
  cssInfo as css,
  javascriptInfo as javascript,
  tailwindInfo as tailwind,
  typescriptInfo as typescript,
  reactInfo as react,
  type TechStackInfo,
} from "./TechStack";

export type ProjectPreviewObject = {
  name: string;
  description: string;
  image: string;
  url: string;
  detailsUrl: string;
  tools: TechStackInfo[];
};

export const animExplorePreview: ProjectPreviewObject = {
  name: "AnimExplore",
  description: "Watchlist website for browsing popular and relevant anime.",
  image: "src/assets/images/animexplore-logo.png",
  url: "https://pavkodev.github.io/AnimExplore/",
  detailsUrl: "",
  tools: [html, css, tailwind, javascript, typescript, react],
};

export const countryViewPreview: ProjectPreviewObject = {
  name: "CountryView",
  description: "Website for an overview of all countries and country details.",
  image: "src/assets/images/countryview-logo-merged.png",
  url: "https://pavkodev.github.io/countryview-ts/",
  detailsUrl: "",
  tools: [html, css, tailwind, javascript, typescript],
};

export const projectPreviews: ProjectPreviewObject[] = [
  animExplorePreview,
  countryViewPreview,
];
