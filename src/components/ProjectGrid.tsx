import { projects } from "@/data/projects";
export default function ProjectGrid() {
  return (
    <div className="repo-grid">
      {projects.map((project) => (
        <a
          key={project.url}
          className="repo-card"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          <h4>{project.title} ↗</h4>
          <p>{project.description}</p>
          <small>{project.tags.join(" / ")}</small>
        </a>
      ))}
    </div>
  );
}
