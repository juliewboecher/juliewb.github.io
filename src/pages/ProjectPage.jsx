import "./ProjectPage.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function ProjectPage() {
  return (
    <section className="project-section" id="projects">
      <h2>Mine Projekter</h2>

      <div className="project-cards">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;
