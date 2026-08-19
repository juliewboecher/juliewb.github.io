import { Link } from "react-router";
import projects from "../data/projects";
import HerosectionCard from "../components/HerosectionCard";
import projectCard from "../components/ProjectCard";

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="page">
      <section className="hero-section">
        <HerosectionCard />
      </section>
      <section className="featured-projects">
        
      </section>
      
    </div>
    
  );
}

export default HomePage;
