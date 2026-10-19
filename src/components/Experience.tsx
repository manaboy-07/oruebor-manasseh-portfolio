export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">03 / EXPERIENCE &amp; CREDENTIALS</p>
          <h2>
            Learning on
            <br />
            <span>real ground.</span>
          </h2>
        </div>
        <a
          className="text-link"
          href="https://www.linkedin.com/in/manasseh-oruebor-769b041a6/"
          rel="noreferrer"
          target="_blank"
        >
          Full profile on LinkedIn ↗
        </a>
      </div>
      <div className="experience-grid">
        <article className="experience-item reveal">
          <span className="eyebrow">MANIFOLD ENTERPRISE SOLUTIONS</span>
          <h3>Internship · Application development</h3>
          <p>
            Working on full-stack applications and company web experiences. My
            work includes certificate management, backend APIs, document
            processing, and frontend interactions.
          </p>
          <div className="tags">
            <span>Next.js / NestJS</span>
            <span>OCI integrations</span>
            <span>Azure DevOps</span>
          </div>
        </article>
        <article className="experience-item reveal">
          <span className="eyebrow">CWG</span>
          <h3>Industrial training</h3>
          <p>
            Hands-on exposure to Linux, networking, RAID, hyper-converged
            infrastructure, virtualization, Windows Server, and Active
            Directory. A practical introduction to the infrastructure
            applications depend on.
          </p>
        </article>
      </div>
      <div className="credentials reveal">
        <article>
          <span>01 / AMAZON WEB SERVICES</span>
          <h3>
            AWS Certified
            <br />
            Cloud Practitioner
          </h3>
          <p>Issued July 2026 · Expires July 2029</p>
        </article>
        <article>
          <span>02 / APTECH</span>
          <h3>
            Certified
            <br />
            Web Developer
          </h3>
          <p>Web development training and certification</p>
        </article>
      </div>
    </section>
  );
}
