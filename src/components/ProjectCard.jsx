

function ProjectCard({ project }) {
  const { title, description, image } = project;
  return (
    <div className="project-card">
      <img className="project-image" src={`${image}`} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
