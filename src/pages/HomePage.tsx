import { useState } from "react";
import { experienceTabs, type ExperienceObject } from "../types/Experience";
import { techStack, type TechStackInfo } from "../types/TechStack";
import { projectPreviews } from "../types/Projects";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [experienceTabIndex, setExperienceTabIndex] = useState(0);
  const experience: ExperienceObject[][] = experienceTabs;
  const EXPERIENCEEDUCATION = 0;
  const EXPERIENCEWORK = 1;
  const stack: TechStackInfo[] = techStack;
  const recentProjects = projectPreviews.slice(0, 2); //For displaying 2 most recent projects
  const [handGesture, setHandGesture] = useState("👋");

  const highfive: HTMLAudioElement = new Audio("src/assets/audio/highfive.mp3");
  const playHighfive = () => {
    highfive.load();
    highfive.play();
  };

  highfive.volume = 0.1;
  return (
    <>
      <div className="m-auto max-w-2xl px-4 text-stone-200 sm:px-0">
        {/* Header section */}
        <HeaderComponent />

        <main>
          {/* About section */}
          <div className="my-4 rounded bg-slate-900 p-4">
            <div className="flex gap-5">
              <img
                className="my-auto size-[70px] rounded-full"
                src="src\assets\images\pavko.png"
                alt=""
              />
              <div className="text-xl">
                <p>
                  Hello, World! I'm Pavel{" "}
                  <span
                    onMouseEnter={() =>
                      handGesture === "👋" ? playHighfive() : ""
                    }
                    onClick={() => setHandGesture("🤝")}
                    className={`animate-wiggle inline-block origin-bottom-right ${handGesture === "👋" ? "hover:scale-105 hover:cursor-grab" : "hover:cursor-default"}`}
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
          </div>
          {/* Experience section */}
          <div className="my-4 rounded bg-slate-900 p-4">
            <h1 className="mb-4 text-xl font-bold">Experience</h1>
            <ul className="flex justify-between rounded-xl bg-slate-950/20">
              <li
                className={`flex-1 cursor-pointer rounded-l-xl py-1 text-center transition-all ${experienceTabIndex === 0 ? "bg-stone-200 text-neutral-950" : ""} `}
                onClick={() => setExperienceTabIndex(EXPERIENCEEDUCATION)}
              >
                Education
              </li>
              <li
                className={`flex-1 cursor-pointer rounded-r-xl py-1 text-center transition-all ${experienceTabIndex === 1 ? "bg-stone-200 text-neutral-950" : ""}`}
                onClick={() => setExperienceTabIndex(EXPERIENCEWORK)}
              >
                Work
              </li>
            </ul>
            <div className="my-4 rounded-md border-2 border-l border-stone-200">
              <ul className="ml-10 border-l">
                {/* Custom work experience field for HR */}
                {experienceTabIndex === EXPERIENCEWORK ? (
                  <form action="" className="-ml-14 flex p-4">
                    <div className="m-2 flex items-center justify-center rounded-full bg-slate-900 p-3 ring">
                      <label htmlFor="input-image">
                        {/* Plus icon used as input indicator for custom company logo input prompt */}
                        <img
                          src="src/assets/svgs/add.svg"
                          alt="placeholder input image"
                          className="size-10 cursor-pointer"
                          id="custom-logo"
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
                          if (document.getElementById("custom-logo")) {
                            image = document.getElementById(
                              "custom-logo",
                            ) as HTMLImageElement;
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
                {experience[experienceTabIndex].map((experience) => (
                  <div className="-ml-14 flex p-4">
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
          </div>
          {/* Tech Stack section */}
          <div className="my-4 rounded bg-slate-900 p-4">
            <h1 className="mb-4 text-xl font-bold">Tech Stack</h1>
            <div className="m-auto grid grid-flow-row grid-cols-3 justify-between gap-2 rounded border-2 p-2">
              {stack.map((tech) => (
                <div
                  className={`flex w-full min-w-fit cursor-default flex-col rounded transition-all hover:bg-[${tech.colour}]/30 bg-[${tech.colour}]/10 border-[${tech.colour}] border-2 p-2 sm:flex-row`}
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
          </div>
          {/* Recent Projects section */}
          <div className="my-4 rounded bg-slate-900 p-4">
            <h1 className="mb-4 text-xl font-bold">Recent Projects</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {recentProjects.map((project) => (
                <div className="col-span-1 rounded-xl border-2 p-4 shadow-[inset_0_-20px_40px_-30px_rgba(255,255,255,0.5)] transition-all hover:bg-stone-200/2 hover:shadow-[inset_0_-20px_45px_-25px_rgba(255,255,255,0.5)]">
                  <div className="flex flex-col gap-2">
                    <img
                      src={project.image}
                      alt=""
                      className="m-auto size-40 rounded-lg sm:size-60"
                    />
                    <h2 className="text-xl font-semibold">{project.name}</h2>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tool) => (
                        <p
                          className={`inline cursor-default border-[${tool.colour}] bg-[${tool.colour}]/10 hover:bg-[${tool.colour}]/30 rounded-2xl border-1 p-1 px-2 text-xs`}
                        >
                          {tool.name}
                        </p>
                      ))}
                    </div>
                    <p>
                      {project.description}
                      {/* <a
                          href={project.url}
                          className="inline-block pl-1 text-orange-500 underline"
                        >
                          Learn more...
                        </a> */}
                    </p>
                    <div className="flex gap-2">
                      <a
                        href={project.url}
                        target="_blank"
                        className="group flex w-fit items-center gap-2 rounded-md border-1 px-2 py-1 transition-colors duration-300 hover:bg-stone-300 active:translate-y-0.5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="size-5 stroke-2 transition-colors group-hover:mix-blend-difference"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                        </svg>
                        <p className="transition-colors group-hover:mix-blend-difference">
                          Visit
                        </p>
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        className="group flex w-fit items-center gap-2 rounded-md border-1 px-2 py-1 transition-colors duration-300 hover:bg-stone-300 active:translate-y-0.5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="size-5 stroke-2 group-hover:mix-blend-difference"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                        <p className="group-hover:mix-blend-difference">
                          Source code
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/projects"
              className="group mt-10 block w-fit cursor-pointer text-xl font-bold"
            >
              More projects{" "}
              <span className="transition-all group-hover:pl-2">&rarr;</span>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};
export default Homepage;
