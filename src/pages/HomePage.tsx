import { useRef, useState } from "react";
import { experienceTabs, type ExperienceObject } from "../types/Experience";
import { techStack, type TechStackInfo } from "../types/TechStack";
import { projectPreviews } from "../types/Projects";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";
import PageSection from "../components/PageSection";
import PageStyling from "../components/PageStyling";
import ProjectCards from "../components/ProjectCards";

const HomePage = () => {
  const [experienceTabIndex, setExperienceTabIndex] = useState(0);
  const experience: ExperienceObject[][] = experienceTabs;
  const EXPERIENCE_EDUCATION = 0;
  const EXPERIENCE_WORK = 1;
  const stack: TechStackInfo[] = techStack;
  const recentProjects = projectPreviews.slice(0, 2); //For displaying 2 most recent projects
  const [handGesture, setHandGesture] = useState("👋");
  const [authorPicture, setAuthorPicture] = useState("/images/pavko.png");
  const customLogoRef = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = window.matchMedia(
    `(prefers-reduced-motion: reduce)`,
  );

  const highfive: HTMLAudioElement = new Audio("/audio/highfive.mp3");
  const playHighfive = () => {
    highfive.load();
    highfive.play();
  };

  highfive.volume = 0.1;
  return (
    <>
      <PageStyling>
        {/* Header section */}
        <HeaderComponent />

        <main>
          {/* About section */}
          <PageSection>
            <div className="flex gap-5">
              <img
                className={`my-auto size-[70px] rounded-full transition-all ease-in-out ${!prefersReducedMotion.matches ? "hover:scale-120 hover:-rotate-12" : ""}`}
                src={authorPicture}
                alt="Author's graduation picture"
                onMouseEnter={() =>
                  setAuthorPicture("/images/pavko-sunglasses.png")
                }
                onMouseLeave={() => setAuthorPicture("/images/pavko.png")}
              />
              <div className="text-xl">
                <p>
                  Hello, World! I'm Pavel{" "}
                  <span
                    onMouseEnter={() =>
                      handGesture === "👋" ? playHighfive() : ""
                    }
                    onClick={() => setHandGesture("🤝")}
                    className={`${!prefersReducedMotion.matches ? "animate-wiggle" : ""} inline-block origin-bottom-right ${handGesture === "👋" && !prefersReducedMotion.matches ? "hover:scale-105 hover:cursor-grab" : "hover:cursor-default"}`}
                  >
                    {handGesture}
                  </span>
                </p>
                <p className="group mb-1 flex items-center gap-1 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-ml-1 inline size-4 text-red-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Edinburgh, United Kingdom
                </p>
                <div className="flex gap-2">
                  <div className="my-auto size-2 animate-pulse rounded-full bg-green-300"></div>
                  <small>Available for work</small>
                </div>
              </div>
            </div>
            <p className="group py-4">
              <span className="transition-opacity delay-200 group-hover:opacity-50">
                I'm a{" "}
              </span>
              <span className="transition-all delay-200 group-hover:bg-amber-800">
                frontend web developer{" "}
              </span>
              <span className="transition-opacity delay-200 group-hover:opacity-50">
                with a keen{" "}
              </span>
              <span className="transition-all delay-200 duration-200 group-hover:bg-amber-800">
                eye for detail{" "}
              </span>
              <span className="transition-opacity delay-200 group-hover:opacity-50">
                who enjoys making tidy, organised websites with{" "}
              </span>
              <span className="transition-all delay-200 duration-400 group-hover:bg-amber-800">
                responsive and reusable UI components.{" "}
              </span>
              <span className="transition-opacity delay-200 group-hover:opacity-50">
                My favourite personal touch for my websites is{" "}
              </span>
              <span className="transition-all delay-200 duration-600 group-hover:bg-amber-800">
                balancing usability with interactibility and engageability.
              </span>
            </p>

            <a
              href="CV.pdf"
              download="pavelkotkaCV.pdf"
              className="flex w-fit cursor-pointer rounded bg-slate-800 fill-transparent p-2 hover:bg-slate-700"
            >
              <svg
                className="mr-2 size-6 stroke-current stroke-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>

              <p>Download CV</p>
            </a>
          </PageSection>
          {/* Experience section */}
          <PageSection>
            <h1 className="mb-4 text-xl font-bold">Experience</h1>
            <ul className="flex justify-between rounded-xl bg-slate-950/20">
              <li
                className={`flex-1 cursor-pointer rounded-l-xl py-1 text-center transition-all ${experienceTabIndex === 0 ? "bg-stone-200 text-neutral-950" : ""} `}
                onClick={() => setExperienceTabIndex(EXPERIENCE_EDUCATION)}
              >
                Education
              </li>
              <li
                className={`flex-1 cursor-pointer rounded-r-xl py-1 text-center transition-all ${experienceTabIndex === 1 ? "bg-stone-200 text-neutral-950" : ""}`}
                onClick={() => setExperienceTabIndex(EXPERIENCE_WORK)}
              >
                Work
              </li>
            </ul>
            <div className="my-4 rounded-md border-2 border-l border-stone-200">
              <ul className="ml-10 border-l">
                {/* Custom work experience field for HR */}
                {experienceTabIndex === EXPERIENCE_WORK ? (
                  <form action="" className="-ml-14 flex p-4">
                    <div className="m-2 flex items-center justify-center rounded-full bg-slate-900 p-3 ring">
                      <label htmlFor="input-image">
                        {/* Plus icon used as input indicator for custom company logo input prompt */}
                        <img
                          src="/svgs/add.svg"
                          alt="placeholder input image"
                          className="size-10 cursor-pointer"
                          ref={customLogoRef}
                        />
                      </label>
                      <input
                        type="file"
                        name="input-image"
                        id="input-image"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          let file = null;
                          if (e.target.files) {
                            file = e.target.files[0];
                          }
                          let image: HTMLImageElement | null = null;
                          if (customLogoRef.current) {
                            image = customLogoRef.current;
                          }
                          if (file && image)
                            image.src = URL.createObjectURL(file);
                        }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-evenly">
                      <small className="text-xs">
                        Check out how great your company would look here 😎
                      </small>
                      <textarea
                        name="company-name"
                        id="company-name"
                        placeholder="Job position here"
                        className="field-sizing-content w-[100%] resize-none font-bold"
                        wrap="soft"
                      ></textarea>
                      <small className="w-full">
                        <textarea
                          name="company-name"
                          id="company-name"
                          placeholder="Company name here"
                          className="field-sizing-content w-[100%] resize-none"
                          wrap="soft"
                          rows={1}
                        ></textarea>
                      </small>
                    </div>
                  </form>
                ) : (
                  ""
                )}
                {experience[experienceTabIndex].map((experience, index) => (
                  <div className="-ml-14 flex p-4" key={`experience-${index}`}>
                    <div className="m-2 flex items-center justify-center rounded-full bg-slate-900 p-3 ring">
                      <img
                        src={experience.image}
                        alt={`${experience.title} logo`}
                        className="size-10"
                      />
                    </div>
                    <div className="w-max flex-1 flex-col">
                      <small>
                        {experience.dateStart} - {experience.dateEnd}
                      </small>
                      <p className="font-bold sm:hidden">
                        {experience.titleShortened}
                      </p>
                      <p className="hidden font-bold sm:block">
                        {experience.title}
                      </p>
                      <small>{experience.institution}</small>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </PageSection>
          {/* Tech Stack section */}
          <PageSection>
            <h1 className="mb-4 text-xl font-bold">Tech Stack</h1>
            <div className="m-auto grid grid-flow-row grid-cols-3 justify-between gap-2 rounded border-2 p-2">
              {stack.map((tech, index) => (
                <div
                  className={`flex w-full min-w-fit cursor-default flex-col rounded transition-all hover:bg-[${tech.colour}]/30 bg-[${tech.colour}]/10 border-[${tech.colour}] border-2 p-2 sm:flex-row`}
                  key={`tech-${index}`}
                >
                  <img
                    className="mx-auto size-6 sm:mx-0 sm:mr-4 sm:size-10"
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                  />
                  <div className="flex flex-col justify-center sm:justify-normal">
                    <p className="pt-2 text-center text-xs sm:pt-0 sm:text-left sm:text-base">
                      {tech.name}
                    </p>
                    <small className="hidden italic sm:block">
                      {tech.extraInfo}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </PageSection>
          {/* Recent Projects section */}
          <PageSection>
            <h1 className="mb-4 text-xl font-bold">Recent Projects</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ProjectCards projects={recentProjects}></ProjectCards>
            </div>
            <Link
              to="/projects"
              className="group mt-10 block w-fit cursor-pointer text-xl font-bold"
            >
              More projects{" "}
              <span className="transition-all group-hover:pl-2">&rarr;</span>
            </Link>
          </PageSection>
        </main>
      </PageStyling>
    </>
  );
};
export default HomePage;
