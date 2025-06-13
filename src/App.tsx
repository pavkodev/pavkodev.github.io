import { useState } from "react";
import "./App.css";

// Experience type and data section
type ExperienceObject = {
  title: string;
  titleShortened?: string;
  institution: string;
  dateStart: string;
  dateEnd: string;
  image: string;
};

const enuExperience: ExperienceObject = {
  title: "Bachelor of Engineering in Computing (Distinction)",
  titleShortened: "BEng Computing (Distinction)",
  institution: "Edinburgh Napier University",
  dateStart: "2020",
  dateEnd: "2024",
  image: "src\\assets\\images\\enu.svg",
};

const ibExperience: ExperienceObject = {
  title: "International Baccalaureate",
  titleShortened: "IB Diploma",
  institution: "Nyborg Gymnasium",
  dateStart: "2017",
  dateEnd: "2020",
  image: "src\\assets\\images\\nyborggym.svg",
};

const riseExperience: ExperienceObject = {
  title: "Frontend WordPress Developer",
  titleShortened: "Frontend WordPress Developer",
  institution: "RISE Aberdeen",
  dateStart: "January 2023",
  dateEnd: "May 2023",
  image: "src\\assets\\images\\rise.png",
};

function App() {
  const [experienceTabIndex, setExperienceTabIndex] = useState(0);
  const educationExperiences = [enuExperience, ibExperience];
  const workExperiences = [riseExperience];
  const experienceTabs = [educationExperiences, workExperiences];
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
                {experienceTabs[experienceTabIndex].map((experience) => (
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
          </div>
          {/* Recent Projects section */}
          <div className="my-4 rounded bg-slate-900 p-4">
            <h1 className="mb-4 text-xl font-bold">Recent Projects</h1>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-col">
                <img
                  src="src\assets\images\placeholder.jpg"
                  alt=""
                  className="aspect-video"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  debitis, voluptates dignissimos ea consequuntur ad.
                </p>
                <a href="#">Learn more...</a>
              </div>
              <div className="flex flex-col">
                <img
                  src="src\assets\images\placeholder.jpg"
                  alt=""
                  className="aspect-video"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  debitis, voluptates dignissimos ea consequuntur ad.
                </p>
                <a href="#">Learn more...</a>
              </div>
              <div className="flex flex-col">
                <img
                  src="src\assets\images\placeholder.jpg"
                  alt=""
                  className="aspect-video"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  debitis, voluptates dignissimos ea consequuntur ad.
                </p>
                <a href="#">Learn more...</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
