

function ProjectCard({ project }) {
  const { title, description, image } = project;
  return (
    <article className="project-card">
      <div classNme="project-card-left">
        <img className="project-image" src={`${image}`} alt={title} />
      </div>
      <div className="project-card-right">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
