import { Link } from "react-router";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { id, year, title, description, image, tags, links } = project;

  return (
    <article className="project-card">
      <Link to={`/projects/${id}`} className="project-card-content">
        <p>{year}</p>
        <div className="project-card-image">
          <img src={image} alt={title} className="project-image" />
        </div>
      </Link>
      
      <div className="project-text">
        <h2>{title}</h2>
        <div className="project-detail-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <ul className="project-links">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ProjectCard;
