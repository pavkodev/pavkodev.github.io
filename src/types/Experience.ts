export type ExperienceObject = {
  title: string;
  titleShortened?: string;
  institution: string;
  dateStart: string;
  dateEnd: string;
  image: string;
};

//Education
const enuExperience: ExperienceObject = {
  title: "Bachelor of Engineering in Computing (Distinction)",
  titleShortened: "BEng Computing (Distinction)",
  institution: "Edinburgh Napier University",
  dateStart: "2020",
  dateEnd: "2024",
  image: "src\\assets\\svgs\\enu.svg",
};

const ibExperience: ExperienceObject = {
  title: "International Baccalaureate",
  titleShortened: "IB Diploma",
  institution: "Nyborg Gymnasium",
  dateStart: "2017",
  dateEnd: "2020",
  image: "src\\assets\\svgs\\nyborggym.svg",
};
const educationExperiences: ExperienceObject[] = [enuExperience, ibExperience];

//Work
const riseExperience: ExperienceObject = {
  title: "Frontend WordPress Developer",
  titleShortened: "Frontend WordPress Developer",
  institution: "RISE Aberdeen",
  dateStart: "January 2023",
  dateEnd: "May 2023",
  image: "src\\assets\\images\\rise.png",
};

const workExperiences: ExperienceObject[] = [riseExperience];

//Combined array
export const experienceTabs: ExperienceObject[][] = [
  educationExperiences,
  workExperiences,
];
