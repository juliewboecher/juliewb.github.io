import { Link } from "react-router";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";
import projects from "../data/projects";

function ProjectSection() {
  return (
    <section className="project-section" id="projects">
      <h2>Mine Projekter</h2>

      <div className="project-cards">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Link to="/projectpage" className="se-alle-projekter">
        Se flere projekter →
      </Link>
    </section>
  );
}

export default ProjectSection;
