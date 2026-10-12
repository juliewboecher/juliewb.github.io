import { useParams } from "react-router";
import projects from "../data/projects";

function DetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Projekt ikke fundet</h2>;
  }

  const { title, year, description } = project;

  return (
    <div className="project-title">
      <h1>{title}</h1>
      <p>{year}</p>
      <p>{description}</p>
      <div className="project-links">
        {project.links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
      <h2>{project.title2}</h2>
      <p>{project.description2}</p>
      <h2>{project.title3}</h2>
      <p>{project.description3}</p>
    </div>
  );
}

export default DetailPage;
