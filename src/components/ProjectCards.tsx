import { type ProjectPreviewObject } from "../types/Projects";

const ProjectCards = (props: { projects: ProjectPreviewObject[] }) => {
  return props.projects.map((project) => (
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
        <p>{project.description}</p>
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
            <p className="group-hover:mix-blend-difference">Source code</p>
          </a>
        </div>
      </div>
    </div>
  ));
};
export default ProjectCards;
