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

  const { title, year, tags, tools } = project;

  return (
    <div className="project-detail">
      {/* Intro / projektets titel */}

      <div className="project-detail-intro">
        {/* TITEL + LINKS */}
        <div className="project-detail-intro-top">
          {/* INFO-SKEMA */}
          <div className="project-detail-info">
            <div className="project-info-item">
              <p className="project-info-label">PROJEKTPERIODE</p>
              <p className="project-info-value">{year}</p>
            </div>

            <div className="project-info-item">
              <p className="project-info-label">REDSKABER & METODER</p>
              <p className="project-info-value">{tools.join(", ")}</p>
            </div>

            <div className="project-info-item">
              <p className="project-info-label">OMRÅDER</p>
              <p className="project-info-value">{tags.join(", ")}</p>
            </div>
          </div>

          <h1>{title}</h1>
        </div>
      </div>

      {/* Første indholdssektion */}
      <div className="project-detail-text">
        <div className="project-section-eyebrow">
          <span className="eyebrow-number">INTRO</span>
        </div>

        <h2>{project.title2}</h2>
        <p>{project.description2}</p>
      </div>

      <div className="detail-project-links">
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
            <span className="eyebrow-number">01</span>
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
            <span className="eyebrow-number">02</span>
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
            <span className="eyebrow-number">03</span>
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
            <span className="eyebrow-number">04</span>
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
              <span className="eyebrow-number">OPSAMLING</span>
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
            <span>FREMADRETTET</span>
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
