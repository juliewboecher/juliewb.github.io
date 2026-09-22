import "/src/components/ProjectCard.css";

function ProjectCard({ project }) {
  const { year, title, description, image, tags, links } = project;
  return (
    <article className="project-card">
      <div classNme="project-card-left">
        <img className="project-image" src={`${image}`} alt={title} />
      </div>
      <div className="project-card-right">
        <h2>{title}</h2>
        <p>{year}</p>
        <p>{tags.join(", ")}</p>
        <p>{description}</p>
        <ul className="project-links">
          {links.map((link) => (
            <button className="project-link" key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </button>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
