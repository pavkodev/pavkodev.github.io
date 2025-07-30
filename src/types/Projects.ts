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
  codeUrl: string;
  detailsUrl: string;
  tools: TechStackInfo[];
};

export const animExplorePreview: ProjectPreviewObject = {
  name: "AnimExplore",
  description: "Watchlist website for browsing popular and relevant anime.",
  image: "src/assets/images/animexplore-logo.png",
  url: "https://pavkodev.github.io/AnimExplore/",
  codeUrl: "https://github.com/pavkodev/AnimExplore",
  detailsUrl: "",
  tools: [html, css, tailwind, javascript, typescript, react],
};

export const countryViewPreview: ProjectPreviewObject = {
  name: "CountryView",
  description: "Website for an overview of all countries and country details.",
  image: "src/assets/images/countryview-logo-merged.png",
  url: "https://pavkodev.github.io/countryview-ts/",
  codeUrl: "https://github.com/pavkodev/countryview-ts",
  detailsUrl: "",
  tools: [html, css, tailwind, javascript, typescript],
};

export const steaimInvestPreview: ProjectPreviewObject = {
  name: "SteamInvest",
  description:
    "Investment tracker for Valve's Steam marketplace. Not recommended for users not familiar with how to use/navigate the Steam market.",
  image: "src/assets/images/steaminvest-logo.png",
  url: "https://pavkodev.github.io/steaminvest-tracker/",
  codeUrl: "https://github.com/pavkodev/steaminvest-tracker",
  detailsUrl: "",
  tools: [html, css, tailwind, javascript, typescript],
};

export const colourTrickPreview: ProjectPreviewObject = {
  name: "ColourTrick",
  description:
    "An older project using an old idea for a stroop effect game to practice Tailwind and Typescript. Though I outgrew the code, this project was part of helping me grow!",
  image: "src/assets/images/colourtrick-logo.png",
  url: "https://pavkodev.github.io/colourTrick-remastered/",
  codeUrl: "https://github.com/pavkodev/colourtrick-remastered",
  detailsUrl: "",
  tools: [html, css, tailwind, javascript, typescript],
};

export const projectPreviews: ProjectPreviewObject[] = [
  animExplorePreview,
  countryViewPreview,
  steaimInvestPreview,
  colourTrickPreview,
];
