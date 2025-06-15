import { useState } from "react";
import "./App.css";
import { experienceTabs, type ExperienceObject } from "./types/Experience";
import { techStack, type TechStackInfo } from "./types/TechStack";

// tailwindcss jit: keep this classes for JIT to be able to capture them
// border-[#ef652a] border-[#2965f1] border-[#f7df1e] border-[#38bdf8] border-[#3178c6] border-[#61dafb]
// bg-[#ef652a]/10 bg-[#2965f1]/10 bg-[#f7df1e]/10 bg-[#38bdf8]/10 bg-[#3178c6]/10 bg-[#61dafb]/10
// hover:bg-[#ef652a]/30 hover:bg-[#2965f1]/30 hover:bg-[#f7df1e]/30 hover:bg-[#38bdf8]/30 hover:bg-[#3178c6]/30 hover:bg-[#61dafb]/30

function App() {
  const [experienceTabIndex, setExperienceTabIndex] = useState(0);
  const experience: ExperienceObject[][] = experienceTabs;
  const stack: TechStackInfo[] = techStack;
  return (
    <>
      <div className="m-auto max-w-2xl px-4 text-stone-200 sm:px-0">
        {/* Header section */}
        <header className="mt-4 flex flex-col items-center justify-between rounded bg-slate-900 p-2 font-mono text-xl sm:flex-row">
          <a href="/" className="cursor-pointer text-2xl font-extrabold">
            PAV<span className="hidden sm:inline">EL </span>KO
            <span className="hidden sm:inline">TKA</span>
          </a>
          <ul className="mt-4 flex gap-4 sm:mt-0">
            <li className="cursor-pointer p-1 hover:bg-slate-800">Projects</li>
            <li className="cursor-pointer p-1 hover:bg-slate-800">Contact</li>
            <li className="cursor-pointer p-1 hover:bg-slate-800">GitHub</li>
          </ul>
        </header>

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
                  <span className="hover:animate-pulse">👋</span>
                </p>
                <p className="group mb-1 flex items-center gap-1 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-ml-1 inline size-4 text-red-400 group-hover:animate-bounce"
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
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quas rerum facilis consequuntur rem eveniet similique
              consequatur, odio eaque, voluptas vero nesciunt mollitia quo?
              Harum voluptas asperiores nam dignissimos mollitia!
            </p>
          </div>
          {/* Experience section */}
          <div className="my-4 rounded bg-slate-900 p-4">
            <h1 className="mb-4 text-xl font-bold">Experience</h1>
            <ul className="flex justify-between rounded-xl bg-slate-950/20">
              <li
                className={`flex-1 cursor-pointer rounded-l-xl py-1 text-center transition-all ${experienceTabIndex === 0 ? "bg-stone-200 text-neutral-950" : ""} `}
                onClick={() => setExperienceTabIndex(0)}
              >
                Education
              </li>
              <li
                className={`flex-1 cursor-pointer rounded-r-xl py-1 text-center transition-all ${experienceTabIndex === 1 ? "bg-stone-200 text-neutral-950" : ""}`}
                onClick={() => setExperienceTabIndex(1)}
              >
                Work
              </li>
            </ul>
            <div className="my-4 rounded-md border-2 border-l border-stone-200">
              <ul className="ml-10 border-l">
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
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <img
                  src="src\assets\images\placeholder.jpg"
                  alt=""
                  className="aspect-video"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  debitis, voluptates dignissimos ea consequuntur ad.
                  <a href="#" className="block">
                    Learn more...
                  </a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row-reverse sm:items-center sm:gap-2">
                <img
                  src="src\assets\images\placeholder.jpg"
                  alt=""
                  className="aspect-video"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  debitis, voluptates dignissimos ea consequuntur ad.
                  <a href="#" className="block">
                    Learn more...
                  </a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <img
                  src="src\assets\images\placeholder.jpg"
                  alt=""
                  className="aspect-video"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  debitis, voluptates dignissimos ea consequuntur ad.
                  <a href="#" className="block">
                    Learn more...
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
