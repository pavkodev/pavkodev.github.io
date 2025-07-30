import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [showContact, setShowContact] = useState(false);

  const svgCopyPath =
    "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z";

  const svgTickPath = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";
  const [emailCopySvgPath, setEmailCopySvgPath] = useState(svgCopyPath);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(
      "\u0070\u0061\u0076\u0065\u006c\u002e\u006b\u006f\u0074\u006b\u0061\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d",
    );

    const btnCopyEmail = document.getElementById("btn-email-copy");
    btnCopyEmail?.classList.replace("hover:bg-stone-200", "bg-green-600");
    btnCopyEmail?.classList.remove("hover:text-stone-950");

    setEmailCopySvgPath(svgTickPath);

    setTimeout(() => {
      btnCopyEmail?.classList.replace("bg-green-600", "hover:bg-stone-200");
      btnCopyEmail?.classList.add("hover:text-stone-950");
      setEmailCopySvgPath(svgCopyPath);
    }, 1000);
  };

  return (
    <header className="flex flex-col items-center justify-between rounded bg-slate-900 p-2 font-mono text-xl sm:flex-row">
      <Link to="/" className="cursor-pointer text-2xl font-extrabold">
        PAV<span className="hidden sm:inline">EL </span>KO
        <span className="hidden sm:inline">TKA</span>
      </Link>
      <nav className="mt-4 w-full sm:mt-0 sm:w-auto">
        <ul className="flex justify-around text-lg sm:gap-4 sm:text-xl">
          <Link to="/projects">
            <li className="cursor-pointer p-1 select-none hover:bg-slate-800 active:translate-y-0.5">
              Projects
            </li>
          </Link>
          <li
            className="relative cursor-pointer p-1 select-none hover:bg-slate-800 active:translate-y-0.5"
            onClick={() => setShowContact(!showContact)}
          >
            Contact
            <ul
              className={`group absolute left-1/2 flex -translate-x-1/2 gap-4 ${showContact === true ? "pointer-events-auto translate-y-3 opacity-100" : "pointer-events-none translate-y-0 opacity-0"} z-1 rounded border-2 bg-slate-900 p-2 duration-200`}
            >
              <li
                className={`transtiion-all duration-200 group-active:opacity-100 hover:-translate-y-1 active:translate-y-1`}
              >
                <a
                  href="https://www.linkedin.com/in/pavel-kotka"
                  target="_blank"
                  className=""
                >
                  <div className="p-1 px-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="m-auto size-10 fill-stone-200"
                    >
                      <title>linkedin</title>
                      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                    </svg>
                    <p>LinkedIn</p>
                  </div>
                </a>
              </li>
              <li
                className={`transition-all duration-400 group-active:opacity-100 hover:-translate-y-1 active:translate-y-1`}
              >
                <Link to="/email-form" className="peer relative">
                  <div className="p-1 px-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="m-auto size-10 fill-stone-200"
                    >
                      <title>email-arrow-right-outline</title>
                      <path d="M13 19C13 18.66 13.04 18.33 13.09 18H4V8L12 13L20 8V13.09C20.72 13.21 21.39 13.46 22 13.81V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19M20 6L12 11L4 6H20M20 22V20H16V18H20V16L23 19L20 22Z" />
                    </svg>
                    <p>Email</p>
                  </div>
                </Link>
                <div className="pointer-events-none absolute inset-0 top-[50%] flex h-full w-full -translate-y-[50%] flex-col items-center justify-around rounded opacity-0 transition-all duration-100 peer-hover:pointer-events-auto peer-hover:opacity-100 peer-hover:backdrop-blur-xs hover:pointer-events-auto hover:opacity-100 hover:backdrop-blur-xs">
                  <button
                    id="btn-email-copy"
                    className="w-[80%] rounded-4xl p-2 text-stone-200 hover:bg-stone-200 hover:text-stone-950"
                    onClick={() => handleEmailCopy()}
                  >
                    <svg
                      id="svg-email-copy"
                      className="m-auto size-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <title>Copy email</title>
                      <path id="svg-path-email-copy" d={emailCopySvgPath} />
                    </svg>
                  </button>
                  <Link
                    to="/email-form"
                    className="w-[80%] rounded-4xl p-2 text-stone-200 hover:bg-stone-200 hover:text-stone-950"
                  >
                    <svg
                      className="m-auto size-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <title>Email form</title>
                      <path d="M3 20V4L22 12M5 17L16.85 12L5 7V10.5L11 12L5 13.5M5 17V7 13.5Z" />
                    </svg>
                  </Link>
                </div>
              </li>
            </ul>
          </li>
          <a href="https://github.com/pavkodev/" target="_blank">
            <li className="flex cursor-pointer items-center p-1 pr-1 select-none hover:bg-slate-800 active:translate-y-0.5">
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-4 self-start fill-current"
              >
                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
              </svg>
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
};
export default HeaderComponent;
