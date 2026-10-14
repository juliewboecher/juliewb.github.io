import { useParams } from "react-router";
import { useEffect } from "react";
import projects from "../data/projects";
import "./DetailPage.css"
import ContactSection from "../components/ContactSection";

function DetailPage() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [id]);

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Projekt ikke fundet</h2>;
  }

  const { title, year, description, image2, tags } = project;

  return (
    <div className="project-detail">
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
      <div className="project-detail-text">
        <h2>{project.title2}</h2>
        <p>{project.description2}</p>
        <h2>{project.title3}</h2>
        <p>{project.description3}</p>
        <img src={project.image2} alt={project.title3} />
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
        <h2>{project.title5}</h2>
        <p>{project.description5}</p>
        <h2>{project.title6}</h2>
        <p>{project.description6}</p>
      </div>
      <ContactSection />
    </div>
  );
}

export default DetailPage;
