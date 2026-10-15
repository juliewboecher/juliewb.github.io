import "./AboutPage.css";
import ContactSection from "../components/ContactSection";

function AboutPage() {
  return (
    <>
      <div className="about-page">
        <article>
          <div className="about-page-intro">
            <h1 className="about-title-name">
              Mit navn er Julie Wendelboe Bøcher
            </h1>

            <img
              className="about-page-image"
              src={`${import.meta.env.BASE_URL}Billedsamling.png`}
              alt="Julie Wendelboe Bøcher"
            />
          </div>

          <div className="about-page-indhold">
            <p>
              Jeg studerer til multimediedesigner, med fokus på Interaction
              Design og særlig interesse for frontend og UX/UI Design.
            </p>

            <p>
              Jeg er målrettet og stædig, når jeg sætter mig for at lære noget
              nyt. Idéer flyver til mig, og min kritiske tilgang til opgaver
              giver mig viljen til at blive ved. Jeg er som person fleksibel og
              ærlig, og jeg trives godt med selvstændigt arbejde i et kreativt
              fællesskab. Min tilgang er proaktiv, og jeg er meget
              ansvarsbevidst for dem jeg arbejder for og med.
            </p>
          </div>
        </article>
      </div>

      <article className="about-page-me">
        <div className="about-page-me-content">
          <h1>Hvorfor arbejde med mig?</h1>

          <p>
            Jeg er en hårdtarbejdende nordjyde, og jeg nyder at blive udfordret.
            Når jeg møder nye udfordringer, giver det mig et kick og et drive
            til at udvikle mine kompetencer. Jeg trives godt i et ambitiøst
            team, hvor kollegaer både udfordrer og motiverer hinanden. Jeg er
            kendt for altid at møde ind med gå-på-mod og et smittende smil.
          </p>
        </div>
      </article>

      <div className="about-page">
        <article className="about-experience">
          <h1>Min Erfaring</h1>

          <div className="about-experience-item">
            <p>August 2025 - Maj 2027</p>

            <h2>Multimediedesigner 3. Semester, Erhvervsakademi Aarhus</h2>

            <p>
              Retning: Interaction Design. Fokus på at skabe en gnidningsfri
              brugeroplevelse, som er tilgængelig for interfacets brugere. UX/UI
              Design og programmering af webapps.
            </p>
          </div>

          <div className="about-experience-item">
            <p>September 2026 - Nu</p>

            <h2>
              Social Media Manager & Content Creator, Sherlock Holmes Pub Aarhus
              C
            </h2>

            <p>
              Fokus på reels. Formidle barens stemning ud til sociale medier.
            </p>
          </div>

          <div className="about-experience-item">
            <p>Januar 2026 - Nu</p>

            <h2>
              Social Media Manager & Content Creator, Café Smagløs Aarhus C
            </h2>

            <p>
              Skabe content til virksomhedens forskellige sociale medier, som
              stemmer overens med virksomhedens brandidentitet heraf video og
              videoredigering. Performance analyse af content og vurdere hvilken
              vej.
            </p>
          </div>
        </article>
      </div>

      <ContactSection />
    </>
  );
}

export default AboutPage;