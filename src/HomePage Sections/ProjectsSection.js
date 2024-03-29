import ProjectsItem from "../HomePage Items/ProjectsItem";

export default function ProjectsSection() {
  return (
    <section id="projects-section" className="projects-section">
      <div className="projects-section-main-div">
        <h2 className="projects-h2">My Projects</h2>
        <div className="projects-grid">
          <ProjectsItem />
        </div>
      </div>
    </section>
  );
}
