import type { ReactNode } from "react";

const PageStyling = (props: { children: ReactNode }) => {
  return (
    <div className="h-fit">
      <div className="mx-auto max-w-2xl p-4 text-stone-200 sm:px-0">
        {props.children}
      </div>
    </div>
  );
};
export default PageStyling;
