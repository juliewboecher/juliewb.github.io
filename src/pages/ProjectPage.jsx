import "./ProjectPage.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import ContactSection from "../components/ContactSection";
import Reveal from "../components/Reveal";

function ProjectPage() {
  return (
    <section id="projects">
      <div className="project-section">
        <h2>Mine Projekter</h2>

        <div className="project-cards">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
      <ContactSection />
    </section>
  );
}

export default ProjectPage;
