export type TechStackInfo = {
  name: string;
  extraInfo?: string;
  icon: string;
  colour: string;
};

export const htmlInfo: TechStackInfo = {
  name: "HTML",
  icon: "src\\assets\\svgs\\html.svg",
  colour: "#ef652a",
};
export const cssInfo: TechStackInfo = {
  name: "CSS",
  icon: "src\\assets\\svgs\\css.svg",
  colour: "#2965f1",
};
export const javascriptInfo: TechStackInfo = {
  name: "JavaScript",
  icon: "src\\assets\\svgs\\javascript.svg",
  colour: "#f7df1e",
};
export const tailwindInfo: TechStackInfo = {
  name: "Tailwind",
  icon: "src\\assets\\svgs\\tailwind.svg",
  colour: "#38bdf8",
};
export const typescriptInfo: TechStackInfo = {
  name: "TypeScript",
  icon: "src\\assets\\svgs\\typescript.svg",
  colour: "#3178c6",
};
export const reactInfo: TechStackInfo = {
  name: "React",
  extraInfo: "Still learning!",
  icon: "src\\assets\\svgs\\react.svg",
  colour: "#61dafb",
};

export const techStack: TechStackInfo[] = [
  htmlInfo,
  cssInfo,
  javascriptInfo,
  tailwindInfo,
  typescriptInfo,
  reactInfo,
];
