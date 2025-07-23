import type { ReactNode } from "react";

const PageSection = (props: { children: ReactNode }) => {
  return <div className="my-4 rounded bg-slate-900 p-4">{props.children}</div>;
};
export default PageSection;
