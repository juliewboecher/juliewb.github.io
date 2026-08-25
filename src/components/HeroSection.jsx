import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <img className="hero-star1"src={`${import.meta.env.BASE_URL}star.svg`} alt="star" />
        <img className="hero-star2"src={`${import.meta.env.BASE_URL}star.svg`} alt="star" />
        <img className="hero-star3"src={`${import.meta.env.BASE_URL}star.svg`} alt="star" />
        <h1>Hej, jeg er Julie</h1>
        <p>3. Semester Multimediedesigner</p>
        <p>Aarhus, Danmark</p>
      </div>
      <div className="hero-right">
        <img
          className="hero-image"
          src={`${import.meta.env.BASE_URL}mecaractersketchedred.png`}
          alt="hero-poster"
        />
      </div>
    </section>
  );
}
export default HeroSection;