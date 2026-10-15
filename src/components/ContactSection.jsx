import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        <div className="contact-left">
          <h2>Lad os skabe sammen!</h2>
        </div>

        <div className="contact-right">
          <div className="contact-links">
            <a href="mailto:julie@boecher.dk">julie@boecher.dk</a>

            <a
              href="https://www.linkedin.com/in/julie-wendelboe-bøcher-8954a4418"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/juliewboecher"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="contact-copyright">© 2026 Julie Wendelboe Bøcher</div>
    </section>
  );
}

export default ContactSection;
