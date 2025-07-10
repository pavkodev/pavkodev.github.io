export type ProjectPreviewObject = {
  name: string;
  description: string;
  image: string;
  url: string;
  detailsUrl: string;
  tools: string[];
};

export const animExplorePreview: ProjectPreviewObject = {
  name: "AnimExplore",
  description: "Watchlist website for browsing popular and relevant anime.",
  image: "src/assets/images/animexplore-logo.png",
  url: "https://pavkodev.github.io/AnimExplore/",
  detailsUrl: "",
  tools: ["HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "React"],
};

export const countryViewPreview: ProjectPreviewObject = {
  name: "CountryView",
  description: "Website for an overview of all countries and country details.",
  image: "src/assets/images/countryview-logo-merged.png",
  url: "https://pavkodev.github.io/countryview-ts/",
  detailsUrl: "",
  tools: ["HTML", "CSS", "Tailwind", "JavaScript", "TypeScript"],
};

export const projectPreviews: ProjectPreviewObject[] = [
  animExplorePreview,
  countryViewPreview,
];
