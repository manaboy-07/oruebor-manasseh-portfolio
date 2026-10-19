export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">06 / GET IN TOUCH</p>
          <h2>
            Have a role
            <br />
            <span>in mind?</span>
          </h2>
        </div>
        <p>
          I’m interested in full-stack development roles
          <br />
          and opportunities to grow in cloud engineering.
          <br />
          Tell me about the team and what you’re building.
        </p>
      </div>
      <address className="contact-grid">
        <a className="contact-card" href="mailto:manassehoruebor@gmail.com">
          <span>EMAIL</span>
          <strong>manassehoruebor@gmail.com</strong>
          <small>Send an email ↗</small>
        </a>
        <a className="contact-card" href="tel:+2347043608352">
          <span>PHONE / NIGERIA</span>
          <strong>0704 360 8352</strong>
          <small>+234 704 360 8352 · Call ↗</small>
        </a>
      </address>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/manasseh-oruebor-769b041a6/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/manaboy-07"
          rel="noreferrer"
          target="_blank"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
