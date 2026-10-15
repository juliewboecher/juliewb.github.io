import { Link } from "react-router";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { id, year, title, description, image, tags, links } = project;

  return (
    <article className="project-card">
      <Link to={`/projects/${id}`} className="project-card-image">
        <img src={image} alt={title} className="project-image" />
      </Link>

      <div className="project-card-info">
        <p>{year}</p>

        <h2>{title}</h2>

        <div className="project-detail-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
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
      </div>
    </article>
  );
}

export default ProjectCard;
