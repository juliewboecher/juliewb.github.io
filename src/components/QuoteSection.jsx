import "./QuoteSection.css";
import Reveal from "./Reveal";

function QuoteSection() {
  return (
    <section className="quote-section">
      <Reveal className="quote-reveal">
        <div className="quote-section-venstre">
          <h1 className="quote-title">
            "Jeg vil varmt anbefale Julie til enhver, der søger en{" "}
            <span className="quote-highlight">
              engageret, kreativ og pligtopfyldende
            </span>{" "}
            medarbejder med lyst til at lære og udvikle sig."
          </h1>

          <h2 className="quote-author">
            - Vincentius, Driftschef Café Smagløs
          </h2>
        </div>
      </Reveal>

      <div className="quote-section-højre">
        <a
          href="https://drive.google.com/file/d/1Yin8p9XTVMgYHOkbEpmXosZn7GSUySH5/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Læs testimonials →
        </a>
      </div>
    </section>
  );
}

export default QuoteSection;
