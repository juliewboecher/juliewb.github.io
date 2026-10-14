import "./QuoteSection.css";

function QuoteSection() {
  return (
    <section className="quote-section">
      <div className="quote-section-venstre">
        <h1 className="quote-title">
          "Siden sin første dag har hun været god til at sige "ja tak" til nye
          opgaver og udfordringer."
        </h1>
        <h2 className="quote-author"> - Vincentius, Driftschef Café Smagløs</h2>
      </div>
      <div className="quote-section-højre">
        <a href="https://drive.google.com/file/d/1Yin8p9XTVMgYHOkbEpmXosZn7GSUySH5/view?usp=sharing">
          Læs testimonials →
        </a>
      </div>
    </section>
  );
};

export default QuoteSection;
