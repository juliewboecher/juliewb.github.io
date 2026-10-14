import { useParams } from "react-router";
import { useEffect } from "react";
import projects from "../data/projects";
import "./DetailPage.css";
import ContactSection from "../components/ContactSection";
import Reveal from "../components/Reveal";

function DetailPage() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Projekt ikke fundet</h2>;
  }

  const { title, year, description, tags } = project;

  return (
    <div className="project-detail">
      {/* Intro / projektets titel */}
      <Reveal>
        <div className="project-detail-text">
          <div className="project-detail-eyebrow">
            <div className="project-detail-tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <p>{year}</p>
          </div>

          <h1>{title}</h1>

          <div className="project-links">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p>{description}</p>
        </div>
      </Reveal>

      {/* Første indholdssektion */}
      <Reveal>
        <div className="project-detail-text">
          <h2>{project.title2}</h2>
          <p>{project.description2}</p>
        </div>
      </Reveal>

      {/* Anden indholdssektion */}
      <Reveal>
        <div className="project-detail-text">
          <h2>{project.title3}</h2>

          <p>{project.description3}</p>

          <img src={project.image2} alt={project.title3} />
        </div>
      </Reveal>

      {/* Process / research */}
      <Reveal>
        <div className="project-detail-text">
          <h2>{project.title4}</h2>

          <h3 className="project-subtitle">{project.title4a}</h3>

          <p>{project.description4a}</p>

          <img src={project.image4a} alt={project.title4a} />

          <h3 className="project-subtitle">{project.title4b}</h3>

          <p>{project.description4b}</p>

          <img src={project.image4b} alt={project.title4b} />

          <h3 className="project-subtitle">{project.title4c}</h3>

          <p>{project.description4c}</p>

          <img src={project.image4c} alt={project.title4c} />

          <h3 className="project-subtitle">{project.title4d}</h3>

          <p>{project.description4d}</p>

          <img src={project.image4d} alt={project.title4d} />
        </div>
      </Reveal>

      {/* Næste sektion */}
      <Reveal>
        <div className="project-detail-text">
          <h2>{project.title5}</h2>
          <p>{project.description5}</p>
        </div>
      </Reveal>

      {/* Sidste sektion */}
      <Reveal>
        <div className="project-detail-text">
          <h2>{project.title6}</h2>
          <p>{project.description6}</p>
        </div>
      </Reveal>

      {/* Kontakt */}
      <Reveal>
        <ContactSection />
      </Reveal>
    </div>
  );
}

export default DetailPage;
