import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-left">
        <h2>Kontakt</h2>
      </div>
      <div className="contact-right">
      <p>mail: julie@boecher.dk</p>
      <p>telefon: +45 25124076</p>
      <p>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/julie-wendelboe-bøcher-8954a4418">
          linkedin.com/in/julieboecher/
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/juliewboecher">github.com/juliewboecher</a>
      </p>
    </div>
  </section>
);
}
export default ContactSection;