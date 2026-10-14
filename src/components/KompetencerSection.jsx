import "./KompetencerSection.css";

function KompetencerSection() {
  return (
    <section className="kompetencer-section">
      <h1>Mine Kompetencer</h1>
      <p>
        USER RESEARCH, UX/UI DESIGN, FRONTEND, PROTOTYPING, CONTENT CREATION,
        ACCESSIBILITY, BRANDIDENTITET, ONBOARDING, DESIGN SYSTEM
      </p>
      <h2>Værktøjer</h2>
      <div className="about-tools">
        <img src={`${import.meta.env.BASE_URL}figma.svg`} alt="Figma" />
        <img src={`${import.meta.env.BASE_URL}supabase.svg`} alt="Supabase" />
        <img src={`${import.meta.env.BASE_URL}react.svg`} alt="React" />
        <img src={`${import.meta.env.BASE_URL}html.svg`} alt="HTML" />
        <img src={`${import.meta.env.BASE_URL}css.svg`} alt="CSS" />
        <img src={`${import.meta.env.BASE_URL}git.svg`} alt="Git" />
        <img src={`${import.meta.env.BASE_URL}ai.svg`} alt="AI" />
        <img src={`${import.meta.env.BASE_URL}ps.svg`} alt="Photoshop" />
        <img src={`${import.meta.env.BASE_URL}jitter.svg`} alt="Jitter" />
      </div>
      <a
        className="download-cv-link"
        href="https://drive.google.com/file/d/1QUH0yja8um6QnVNjeBn5Hk3R20AF2qc9/view?usp=sharing"
      >
        Download CV →
      </a>
    </section>
  );
}

export default KompetencerSection;
