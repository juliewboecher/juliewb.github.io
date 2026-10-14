import "./AboutSection.css";
import Reveal from "./Reveal";
import { Link } from "react-router";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <Reveal className="about-reveal">
        <div className="about-right">
          <h1 className="about-title">Hvem er jeg?</h1>

          <p>
            Jeg er målrettet og stædig, når jeg sætter mig for at lære noget
            nyt. Idéer flyver til mig, og min kritiske tilgang til opgaver giver
            mig viljen til at blive ved. Jeg er som person fleksibel og ærlig,
            og jeg trives godt med selvstændigt arbejde i et kreativt
            fællesskab. Min tilgang er proaktiv, og jeg er meget ansvarsbevidst
            for dem jeg arbejder for og med.
          </p>
          <Link to="/about" className="read-more-about-me">
            Lær mig bedre at kende →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export default AboutSection;
