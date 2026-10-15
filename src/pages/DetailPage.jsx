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
      </div>

      {/* Første indholdssektion */}
      <div className="project-detail-text">
        <div className="project-section-eyebrow">
          <span className="eyebrow-number">Intro</span>
        </div>

        <h2>{project.title2}</h2>
        <p>{project.description2}</p>
      </div>

      {/* Title 3 + Title 4 */}
      <Reveal>
        <section className="project-detail-colored-section project-detail-two-column-section">
          <div className="project-detail-column">
            <div className="project-section-eyebrow">
              <span>01</span>
              <span className="eyebrow-line"></span>
            </div>

            <h2>{project.title3}</h2>
            <p>{project.description3}</p>
          </div>

          <div className="project-detail-column">
            <div className="project-section-eyebrow">
              <span>02</span>
              <span className="eyebrow-line"></span>
            </div>

            <h2>{project.title4}</h2>
            <p>{project.description4}</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <div className="project-detail-image-section">
          <div className="project-detail-image-text">
            <h2 className="project-subtitle">{project.title4a}</h2>
            <p>{project.description4a}</p>
          </div>

          <div className="project-detail-image-wrapper">
            <img src={project.image4a} alt={project.title4a} />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="project-detail-image-section">
          <div className="project-detail-image-text">
            <h2 className="project-subtitle">{project.title4b}</h2>
            <p>{project.description4b}</p>
          </div>

          <div className="project-detail-image-wrapper">
            <img src={project.image4b} alt={project.title4b} />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="project-detail-image-section">
          <div className="project-detail-image-text">
            <h2 className="project-subtitle">{project.title4c}</h2>
            <p>{project.description4c}</p>
          </div>

          <div className="project-detail-image-wrapper">
            <img src={project.image4c} alt={project.title4c} />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="project-detail-image-section">
          <div className="project-detail-image-text">
            <h2 className="project-subtitle">{project.title4d}</h2>
            <p>{project.description4d}</p>
          </div>

          <div className="project-detail-image-wrapper">
            <img src={project.image4d} alt={project.title4d} />
          </div>
        </div>
      </Reveal>

      {/* Næste sektion - RØD */}
      <Reveal>
        <div className="project-detail-colored-section">
          <div className="project-detail-colored-content">
            <div className="project-section-eyebrow">
              <span className="eyebrow-number">Opsamling</span>
            </div>
            <h2>{project.title5}</h2>
            <p>{project.description5}</p>
          </div>
        </div>
      </Reveal>

      {/* Sidste sektion - RØD */}
      <div className="project-detail-colored-section">
        <div className="project-detail-colored-content">
          <div className="project-section-eyebrow">
            <span>Hva så nu?</span>
          </div>
          <h2>{project.title6}</h2>
          <p>{project.description6}</p>
        </div>
      </div>

      {/* Kontakt */}
      <ContactSection />
    </div>
  );
}

export default DetailPage;
