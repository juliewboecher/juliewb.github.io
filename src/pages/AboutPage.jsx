import "./AboutPage.css";
import ContactSection from "../components/ContactSection";

function AboutPage() {
  return (
    <section>
      <div className="about-page">
        <article>
          <h1>Mit navn er Julie Wendelboe Bøcher</h1>
          <h2>
            Jeg studerer til multimediedesigner, med fokus på Interaction Design og særlig interesse for
            frontend og UX/UI Design.
          </h2>
          <p>
            Jeg er målrettet og stædig, når jeg sætter mig for at lære noget
            nyt. Idéer flyver til mig, og min kritiske tilgang til opgaver giver
            mig viljen til at blive ved. Jeg er som person fleksibel og ærlig,
            og jeg trives godt med selvstændigt arbejde i et kreativt
            fællesskab. Min tilgang er proaktiv, og jeg er meget ansvarsbevidst
            for dem jeg arbejder for og med.
          </p>
          <p>
            Jeg er en passioneret UX/UI designer med erfaring inden for
            frontend-udvikling. Jeg elsker at skabe brugervenlige og æstetisk
            tiltalende digitale oplevelser.
          </p>
        </article>
        <article className="about-page-me">
          <h1>Hvorfor arbejde med mig?</h1>
          <p>
            Jeg er en hårdtarbejdende nordjyde, og jeg nyder at blive udfordret.
            Når jeg møder nye udfordringer, giver det mig et kick og et drive
            til at udvikle mine kompetencer. Jeg trives godt i et ambitiøst
            team, hvor kollegaer både udfordrer og motiverer hinanden. Jeg er
            kendt for altid at møde ind med gå-på-mod og et smittende smil.
          </p>
        </article>
        <article className="about-experience">
          <h1>Min Erfaring</h1>
          <h2>Social Media Manager</h2>
          <p>Café Smagløs</p>
          <p>
            Skabe content til virksomhedens forskellige sociale medier, som
            stemmer overens med virksomhedens brandidentitet heraf video og
            videoredigering. Performance analyse af content og vurdere hvilken
            vej
          </p>
        </article>
      </div>
      <ContactSection />
    </section>
  );
}

export default AboutPage;
