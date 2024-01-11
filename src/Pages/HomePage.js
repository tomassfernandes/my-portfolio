import Header from "../HomePage Sections/Header";
import IntroSection from "../HomePage Sections/IntroSection";
import ResumeSection from "../HomePage Sections/ResumeSection";
import ProjectsSection from "../HomePage Sections/ProjectsSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <IntroSection />
      <ResumeSection />
      <ProjectsSection />
      <div className="scroll-div">
        <div className="scroll-shape-div">
          <a className="scroll-losange"></a>
        </div>

        <div className="scroll-shape-div">
          <div className="scroll-losange"></div>
        </div>

        <div className="scroll-shape-div">
          <div className="scroll-losange"></div>
        </div>

        <div className="scroll-shape-div">
          <div className="scroll-losange"></div>
        </div>
      </div>
    </>
  );
}
