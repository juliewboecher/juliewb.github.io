import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-right">
        <h2>Om Mig</h2>
        <p>
          Jeg er målrettet og stædig, når jeg sætter mig for at lære noget nyt.
          Idéer flyver til mig, og min kritiske tilgang til opgaver giver mig
          viljen til at blive ved. Jeg er som person fleksibel og ærlig, og jeg
          trives godt med selvstændigt arbejde i et kreativt fællesskab. Min
          tilgang er proaktiv, og jeg er meget ansvarsbevidst for dem jeg
          arbejder for og med.
        </p>
        <h2>Kompetencer</h2>
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
        <img
          className="about-image"
          src={`${import.meta.env.BASE_URL}mecaractersketchedred.png`}
          alt="Om Mig"
        />
      </div>
    </section>
  );
}
export default AboutSection;