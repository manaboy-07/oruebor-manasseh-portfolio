export default function TechStack() {
  return (
    <section className="stack section" id="stack">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">04 / MY TOOLKIT</p>
          <h2>
            Built on solid
            <br />
            <span>foundations.</span>
          </h2>
        </div>
        <p>
          My working stack comes first.
          <br />
          Learning goals are labelled separately.
        </p>
      </div>
      <div className="stack-row reveal">
        <span>01</span>
        <h3>The experience</h3>
        <p>Next.js · React · TypeScript · Tailwind CSS · GSAP</p>
        <b>FRONTEND</b>
      </div>
      <div className="stack-row reveal">
        <span>02</span>
        <h3>The engine</h3>
        <p>NestJS · Prisma · PostgreSQL · Redis · BullMQ</p>
        <b>BACKEND</b>
      </div>
      <div className="stack-row reveal">
        <span>03</span>
        <h3>The infrastructure</h3>
        <p>Linux · Docker · OCI · Azure DevOps</p>
        <b>BUILDING WITH</b>
      </div>
      <div className="stack-row reveal">
        <span>04</span>
        <h3>Learning &amp; next steps</h3>
        <p>
          Learning: Terraform, system design, AWS architecture.
          <br />
          Planned: Kubernetes.
        </p>
        <b>DEVELOPING SKILLS</b>
      </div>
    </section>
  );
}
