import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";
import projects from "../data/projects";

function ProjectSection() {
  return (
    <section className="project-section">
      <h2>Mine Projekter</h2>
      <article className="project-cards" >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </article>
    </section>
  );
}

export default ProjectSection;
