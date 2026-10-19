export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about-title reveal">
        <p className="eyebrow">02 / THE PERSON BEHIND THE CODE</p>
        <h2>
          Builder by habit.
          <br />
          <em>Curious by default.</em>
        </h2>
      </div>
      <div className="about-grid">
        <div aria-hidden="true" className="monogram">
          MO<span>LEARN. BUILD. REPEAT.</span>
        </div>
        <div className="about-copy reveal">
          <p>
            I’m Manasseh, an intermediate full-stack developer, AWS Certified
            Cloud Practitioner, and Computer Science student at Obafemi Awolowo
            University, Nigeria.
          </p>
          <p>
            I build with Next.js and NestJS, then keep following the questions:
            How does it scale? Where does it run? What happens when it fails?
            That curiosity is taking me deeper into cloud infrastructure, Linux,
            and system design.
          </p>
          <p>
            I’m comfortable building applications, and I’m still learning how to
            make better engineering decisions. I like asking questions, getting
            useful feedback, and working with people who know things I don’t.
            I’m looking for a team where I can contribute and keep growing.
          </p>
          <div className="about-foot">
            <span>OAU · COMPUTER SCIENCE</span>
            <span>FULL-STACK → CLOUD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
