import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-left-top">
          <h1>Julie Wendelboe</h1>
          <p>
            UX/UI DESIGN, ACCESSIBILITY, FRONTEND, REACT, SUPABASE, CONTENT
            CREATION
          </p>
        </div>
        <div className="hero-left-bottom">
          <p>3. Semester Multimediedesigner</p>
          <p>Aarhus, Danmark</p>
        </div>
      </div>
      <div className="hero-right">
        <img
          className="hero-image"
          src={`${import.meta.env.BASE_URL}redportrait.png`}
          alt="hero-poster"
        />
        <img
          className="hero-star1"
          src={`${import.meta.env.BASE_URL}staryellow.svg`}
          alt="star"
        />
        <img
          className="hero-star2"
          src={`${import.meta.env.BASE_URL}staryellow.svg`}
          alt="star"
        />
        <img
          className="hero-star3"
          src={`${import.meta.env.BASE_URL}staryellow.svg`}
          alt="star"
        />
      </div>
    </section>
  );
}
export default HeroSection;