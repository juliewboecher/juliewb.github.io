import { Link } from "react-router";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";
import projects from "../data/projects";
import Reveal from "./Reveal";

function ProjectSection() {
  return (
    <section className="project-section" id="projects">
      <h2>Mine Projekter</h2>

      <div className="project-cards">
        {projects.slice(0, 2).map((project) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Link to="/projectpage" className="se-alle-projekter">
        Se flere projekter →
      </Link>
    </section>
  );
}

export default ProjectSection;
