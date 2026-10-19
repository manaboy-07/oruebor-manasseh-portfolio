import ProjectGrid from "./ProjectGrid";
export default function SelectedWork() {
  return (
    <section className="work section" id="work">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2>
            Less talk.
            <br />
            <span>More building.</span>
          </h2>
        </div>
        <p>
          A few problems I’ve been turning into code.
          <br />
          Real projects, thoughtful decisions,
          <br />
          and plenty learned along the way.
        </p>
      </div>
      <article className="project reveal">
        <div className="project-visual cert">
          <div className="mock-window">
            <div className="window-top">
              <span>◈ CertTracker</span>
              <small>WORKSPACE / OVERVIEW</small>
            </div>
            <div className="mock-content">
              <p>Clarity for every credential.</p>
              <div className="mock-stats">
                <div>
                  <span>Certificates</span>
                  <strong>24</strong>
                </div>
                <div>
                  <span>Valid</span>
                  <strong>21</strong>
                </div>
                <div>
                  <span>Expiring</span>
                  <strong>03</strong>
                </div>
              </div>
              <div className="mock-row">
                <span className="icon">A</span>
                <div>
                  AWS certification
                  <small>Cloud · Professional development</small>
                </div>
                <span className="badge">VALID</span>
              </div>
              <div className="mock-row">
                <span className="icon">N</span>
                <div>
                  Your next step
                  <small>AI-assisted learning recommendations</small>
                </div>
                <span>↗</span>
              </div>
            </div>
          </div>
          <span className="visual-note">ILLUSTRATIVE INTERFACE</span>
        </div>
        <div className="project-info">
          <div className="project-meta">
            <span>01 / FULL-STACK APPLICATION</span>
            <span>IN DEVELOPMENT</span>
          </div>
          <h3>Certificate Tracker</h3>
          <p>
            One place to manage professional certifications, extract document
            details, and discover what to learn next.
          </p>
          <div className="tags">
            <span>Next.js</span>
            <span>NestJS</span>
            <span>PostgreSQL</span>
            <span>Gemini</span>
            <span>BullMQ</span>
          </div>
          <details>
            <summary>
              Under the hood <span>+</span>
            </summary>
            <p>
              Cookie-based JWT authentication and role-based access support the
              workspace. Document extraction runs in a BullMQ worker, with
              object storage for uploads and Gemini-assisted recommendations.
              Core certificate management is implemented; the notification
              scheduler is a planned next step.
            </p>
          </details>
        </div>
      </article>
      <article className="project reverse reveal">
        <div className="project-visual hiring">
          <div className="api-label">HIRING / SYSTEM FLOW</div>
          <div className="flow">
            <div>
              Public role <span>GET /roles/:slug</span>
            </div>
            <i>↓</i>
            <div className="active">
              Application <span>Candidate + documents</span>
            </div>
            <i>↓</i>
            <div>
              Pipeline <span>Ordered hiring stages</span>
            </div>
          </div>
          <div className="code-tag">
            <span>200</span> A clearer path to opportunity.
          </div>
        </div>
        <div className="project-info">
          <div className="project-meta">
            <span>02 / BACKEND CONTRIBUTION</span>
            <span>IN PROGRESS</span>
          </div>
          <h3>
            Hiring, behind
            <br />
            the scenes.
          </h3>
          <p>
            Backend work for a hiring platform, making published roles
            accessible and candidate document uploads structured.
          </p>
          <div className="tags">
            <span>NestJS</span>
            <span>Prisma</span>
            <span>PostgreSQL</span>
            <span>Object storage</span>
          </div>
          <details>
            <summary>
              Explore my contribution <span>+</span>
            </summary>
            <p>
              My scope covers public role retrieval and the CV upload API. Role
              retrieval includes company information, enabled pipeline stages in
              order, and availability checks. Upload work focuses on file
              validation, storage, and linking documents to an application.
            </p>
          </details>
        </div>
      </article>
      <article className="project reveal">
        <div className="project-visual football">
          <div className="football-diagram">
            <span className="eyebrow">MATCHDAY / PREDICT → PLAY → COMPARE</span>
            <strong>
              Football.
              <br />
              Friends.
              <br />
              Bragging rights.
            </strong>
            <div className="match-score">
              <span>YOUR PICK</span>
              <b>2 : 1</b>
              <span>BEFORE KICK-OFF</span>
            </div>
            <small>CONCEPT INTERFACE · IN DEVELOPMENT</small>
          </div>
        </div>
        <div className="project-info">
          <div className="project-meta">
            <span>03 / PERSONAL FULL-STACK PROJECT</span>
            <span>ACTIVELY BUILDING</span>
          </div>
          <h3>Football Predictor</h3>
          <p>
            My friends and I have played a football prediction game for years.
            I’m turning it into a platform where we can make our picks, follow
            matches, and compete on a leaderboard.
          </p>
          <div className="tags">
            <span>Next.js</span>
            <span>NestJS</span>
            <span>Prisma</span>
            <span>Zustand</span>
            <span>TanStack Query</span>
          </div>
          <details>
            <summary>
              The product &amp; the learning <span>+</span>
            </summary>
            <p>
              The planned flow starts with an admin selecting fixtures. Players
              submit predictions before kick-off; match results drive points and
              leaderboard positions. I’m working on bringing the frontend and
              backend together.
            </p>
            <p>
              Next up: a match-data integration, real-time updates with
              WebSockets, and clearer scoring rules. I’m exploring GraphQL and
              gRPC as learning exercises, with AI-assisted features further down
              the list. These are development goals, not shipped capabilities.
            </p>
            <p>
              This project gives new concepts somewhere useful to live. State
              management, API design, background jobs, and deployment all become
              easier to care about when they power a game I actually play.
            </p>
          </details>
        </div>
      </article>
      <div className="more-work reveal">
        <p className="eyebrow">MORE IN THE WORKSHOP</p>
        <h3>This page will keep growing.</h3>
        <p>
          I’m building new projects and revisiting older ones as I learn. Here
          are a few public repositories you can explore today.
        </p>
        <ProjectGrid />
        <a
          className="text-link"
          href="https://github.com/manaboy-07?tab=repositories"
          rel="noreferrer"
          target="_blank"
        >
          Browse all public repositories ↗
        </a>
      </div>
    </section>
  );
}
