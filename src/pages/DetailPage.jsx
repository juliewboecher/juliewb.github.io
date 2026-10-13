import { useParams } from "react-router";
import { useEffect } from "react";
import projects from "../data/projects";
import "./DetailPage.css"

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
      <h1>{title}</h1>
      <p>{year}</p>
      <p>{tags.join(", ")}</p>
      <p>{description}</p>
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
      <h2>{project.title2}</h2>
      <p>{project.description2}</p>
      <h2>{project.title3}</h2>
      <p>{project.description3}</p>
      <img src={project.image2} alt={project.title3} />
      <h2>{project.title4}</h2>
      <h3 className="project-subtitle">{project.title4a}</h3>
      <p>{project.description4a}</p>
      <h3 className="project-subtitle">{project.title4b}</h3>
      <p>{project.description4b}</p>
      <h3 className="project-subtitle">{project.title4c}</h3>
      <p>{project.description4c}</p>
      <h3 className="project-subtitle">{project.title4d}</h3>
      <p>{project.description4d}</p>
      <h2>{project.title5}</h2>
      <p>{project.description5}</p>
      <h2>{project.title6}</h2>
      <p>{project.description6}</p>
    </div>
  );
}

export default DetailPage;
