import projects from "../data/projects";

function ProjectCard({ project }) {
  const { title, description, image } = project;
  return (
    <div className="project-card">
      <img src={`${image}`} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
