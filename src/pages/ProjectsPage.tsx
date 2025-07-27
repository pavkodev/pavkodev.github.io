import HeaderComponent from "../components/HeaderComponent";
import PageSection from "../components/PageSection";
import PageStyling from "../components/PageStyling";
import ProjectCards from "../components/ProjectCards";
import { projectPreviews } from "../types/Projects";

const ProjectsPage = () => {
  return (
    <PageStyling>
      <HeaderComponent />
      <PageSection>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProjectCards projects={projectPreviews}></ProjectCards>
        </div>
      </PageSection>
    </PageStyling>
  );
};
export default ProjectsPage;
