import type { ReactNode } from "react";

const PageStyling = (props: { children: ReactNode }) => {
  return (
    <div className="m-auto max-w-2xl px-4 text-stone-200 sm:px-0">
      {props.children}
    </div>
  );
};
export default PageStyling;
