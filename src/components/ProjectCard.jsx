import { Link } from "react-router";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { id, year, title, description, image, tags, links } = project;

  return (
    <article className="project-card">
      <Link to={`/projects/${id}`} className="project-card-content">
        <div className="project-card-image">
          <img src={image} alt={title} className="project-image" />
        </div>

        <div className="project-text">
          <h2>{title}</h2>
          <p>{year}</p>
          <p>{tags.join(", ")}</p>
          <p>{description}</p>
        </div>
      </Link>

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
