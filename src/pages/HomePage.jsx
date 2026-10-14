import { Link } from "react-router";
import projects from "../data/projects";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import QuoteSection from "../components/QuoteSection";

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="page">
      <section id="hero" >
        <HeroSection />
      </section>
      <section>
        <QuoteSection />
      </section>
      <section id="projects" >
        <ProjectSection projects={featuredProjects} />
      </section>
      <section id="about" >
        <AboutSection />
      </section>
      <section id="contact" >
        <ContactSection />
      </section>
    </div>
    
  );
}

export default HomePage;
