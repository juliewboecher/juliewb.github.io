import { useParams } from "react-router";
import projects from "../data/projects";

function DetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Projekt ikke fundet</h2>;
  }

  const { title, year } = project;

  return (
    <div>
      <h1>{title}</h1>
      <p>{year}</p>
      
    </div>
  );
}

export default DetailPage;
