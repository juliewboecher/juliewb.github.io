import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <img src={`${import.meta.env.BASE_URL}portraitsketchred.png`} alt="Om Mig" />
      </div>
      <div className="about-right">
      <h2>Om Mig</h2>
      <p>Jeg er en passioneret udvikler med erfaring inden for webudvikling.</p>
      <h2>Mine Færdigheder</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      </div>
    </section>
  );
}
export default AboutSection;