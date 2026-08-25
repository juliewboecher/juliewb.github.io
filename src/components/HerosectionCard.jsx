import "./HerosectionCard.css";

function HerosectionCard() {
  return (
    <section className="hero-section-card">
      <div className="hero-left">
        <h1>Hej, jeg er Julie</h1>
        <p>Julie Wendelboe Bøcher</p>
        <p>Aarhus, Danmark</p>
        <p>3. Semester Multimediedesigner</p>
        </div>
        <div className="hero-right">
        <img
          className="hero-image"
          src={`${import.meta.env.BASE_URL}mecaractor.png`}
          alt="hero-poster"
        />
        </div>
    </section>
  );
}
export default HerosectionCard;